<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;


class FileReader
{
    public function read(string $filename): iterable
    {
        if (!$filename) {
            throw new \Exception("The file name is not defined. Define it with 'setFilename' method");
        }

        if (!$fh = fopen($filename, 'r')) {
            throw new \Exception("Unable to open file '".$filename."' for read.");
        }

        $keys = [];
        while (false !== ($read = fgetcsv($fh,1024,';','"'))) {
            if (empty($keys)) {
                $keys=$read;
                continue;
            }
            yield array_combine($keys,$read);;
        }
    }

}