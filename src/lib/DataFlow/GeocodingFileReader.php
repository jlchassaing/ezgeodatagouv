<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;


use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Symfony\Component\Filesystem\Filesystem;

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
        if (!$this->fileExists($filename)){
            throw new FileReaderException("Unable to open file '".$filename."' for read.");
        }

        if (@!$fh = fopen($filename, 'r')) {
            throw new FileReaderException("Unable to read file '".$filename."'.");
        }

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
        $client = new Client();
        $response = $client->request('POST', $this->api_url, $this->getRequestData($filename));

        if ($response->getStatusCode() === 200) {
            $data = $response->getBody();
            $cache = '';
            while (!$data->eof()) {
                $read = $cache . $data->read(2048);
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

    private function getRequestData($filename): array
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
        return $data;
    }

}