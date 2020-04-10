<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlow;

interface ReaderInterface
{
    public function read(string $filename): iterable;
}