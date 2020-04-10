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
}