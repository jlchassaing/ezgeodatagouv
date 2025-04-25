<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 *
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
        if (preg_match('/^(http[s]*|ftp):\/\//', $filename, $matches)) {
            $ch = curl_init();
            $options = [
                CURLOPT_FOLLOWLOCATION => 1,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_NOBODY => 1,
                CURLOPT_URL => $filename,
            ];

            curl_setopt_array($ch, $options);

            // Execute
            $res = curl_exec($ch);

            // Check HTTP status code
            if (!curl_errno($ch)) {
                return 200 === curl_getinfo($ch, CURLINFO_HTTP_CODE);
            }

            return false;
        }

        return file_exists($filename);
    }

    // detect csv field seperataor
    public function initFieldSeparators(string $line): void
    {
        $this->separator = str_contains($line, ';')
            ? ';'
            : ',';
        if (preg_match('/["\']*'.$this->separator.'["\']*/', $line, $match)) {
            if (3 === count($match) && $match[1] === $match[2]) {
                $this->enclosure = $match[1];
            }
        }
    }
}
