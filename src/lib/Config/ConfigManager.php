<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\Config;

class ConfigManager
{
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    public function getResource($resource)
    {
        return $this->config['resources'][$resource];
    }

}