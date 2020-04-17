<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;


use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

class FileReader extends AbstractReader
{
    protected $keys;

    public function read(string $filename): iterable
    {
        if (!$filename) {
            throw new \Exception("The file name is not defined. Define it with 'setFilename' method");
        }

        if (!$fh = fopen($filename, 'r')) {
            throw new \Exception("Unable to open file '".$filename."' for read.");
        }

        $keys = [];

        while (false !== ($read = fgets($fh,2048))) {
            $data = $this->getData($read);
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
}
