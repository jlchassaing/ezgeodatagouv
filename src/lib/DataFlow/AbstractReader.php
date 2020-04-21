<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;


abstract class AbstractReader implements ReaderInterface
{
    protected $config;

    public function init($config): AbstractReader
    {
        $this->config = $config;
        return $this;
    }

    abstract public function read(string $filename): iterable;

    public function fileExists(string $filename): bool
    {
        if (preg_match('/^(http[s]*|ftp):\/\//',$filename, $matches)){
            $headers = @get_headers($filename);
            $exists = false;
            foreach ($headers as $header) {
                if (preg_match('/HTTP\/1\.\d{1} 200 OK/', $header)){
                    $exists = true;
                    break;
                }
            }
            return $exists;
        }
        return file_exists($filename);
    }


}