<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;


class FileReader extends AbstractReader
{
    /**
     * @throws FileReaderException
     */
    public function read(string $filename): iterable
    {
        if (!$this->fileExists($filename)) {
            throw new FileReaderException("Unable to open file '" . $filename . "' for read.");
        }
        
        if (@!$fh = fopen($filename, 'r')) {
            throw new FileReaderException("Unable to read file '" . $filename . "'.");
        }
        
        while (false !== ($read = fgets($fh, 2048))) {
            $data = $this->getData($read);
            if (empty($data)) {
                continue;
            } else {
                yield $data;
            }
        }
    }
    
    private function getData($line)
    {
        if (empty($this->keys)) {
            $this->initFieldSeparators($line);
        }
        
        $data = str_getcsv($line, $this->separator, $this->enclosure);
        if (empty($this->keys)) {
            $this->keys = $data;
            
            return null;
        }
        
        return count($data) === count($this->keys) ? array_combine($this->keys, $data) : null;
    }
}
