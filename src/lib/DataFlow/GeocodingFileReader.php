<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;


use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

class GeocodingFileReader extends AbstractReader
{
    protected $keys;

    /** @var string */
    private $api_url;

    public function __construct($api_url)
    {
        $this->api_url = $api_url;
    }

    public function read(string $filename): iterable
    {
        if (!$filename) {
            throw new \Exception("The file name is not defined. Define it with 'setFilename' method");
        }

        if (!$fh = fopen($filename, 'r')) {
            throw new \Exception("Unable to open file '".$filename."' for read.");
        }

        $keys = [];

        foreach($this->geocodeFile($filename) as $line){
            $data = $this->getData($line);
            if (empty($data)) continue;
            else yield $data;
        }
    }

    private function getData($line)
    {
        $data = str_getcsv($line,';','"');
        if (empty($this->keys)){
            $this->keys = $data;
            return null;
        }
        return array_combine($this->keys,$data);
    }

    public function geocodeFile($filename)
    {
        $params = [];

        foreach ($this->config['geocoding_fields'] as $key => $geocodingField) {
            if (is_array($geocodingField)){
                foreach ($geocodingField as $field){
                    $params[] = ['name' => $key, 'contents' => $field ];
                }
            } else {
                $params[] = ['name' => $key, 'contents' => $geocodingField ];
            }
        }

        $params[] = [
            'name' => 'data',
            'contents' => fopen($filename, 'r'),
        ];

        $data = [
            'multipart' => $params
        ];

        $client = new Client();
        $response = $client->request('POST', $this->api_url, $data);

        if ($response->getStatusCode() === 200) {
            $data = $response->getBody();
            $cache = '';
            while (!$data->eof()) {
                $read = $cache . $data->read(1024);
                $lines = explode(PHP_EOL,$read);
                $nbLines = count($lines);
                if ($nbLines) {
                    while (count($lines) > 1)
                    {
                        yield array_shift($lines);
                    }
                    $cache = $lines[0];
                } else {
                    $cache = $read;
                }
            }
            return $cache;

        } else {
            echo "ERROR";
            /**
             * @todo deal correctly with this error
             */
            throw new \Exception($response->getReasonPhrase());
        }
    }

}