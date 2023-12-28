<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;

abstract class AbstractReader implements ReaderInterface
{
    protected $config;
    protected $separator;
    protected $enclosure;

    public function init($config): AbstractReader
    {
        $this->config = $config;
        $this->separator = $config['csv_field_separator'] ?? ';';
        $this->enclosure = $config['enclosure'] ?? '';
        return $this;
    }

    abstract public function read(string $filename): iterable;

    public function fileExists(string $filename): bool
    {
        if (preg_match('/^(http[s]*|ftp):\/\//',$filename, $matches)){
            
            $ch = curl_init($filename);
            
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE);

            // Execute
            curl_exec($ch);
            
            $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            
            // Check HTTP status code
            if (!curl_errno($ch)) {
                return curl_getinfo($ch, CURLINFO_HTTP_CODE) === 200;
            }
            
            return false;
            
        }
        return file_exists($filename);
    }

    public function initFieldSeparators(string $line): void
    {
        $this->separator = str_contains($line, ';')
            ? ';'
            : ',';
        if (preg_match('/["\']*' . $this->separator . '["\']*/', $line, $match)) {
            if (count($match) === 3 && $match[1] === $match[2]) {
                $this->enclosure = $match[1];
            }
        }
    }


}