<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\Config;

use eZGeoDataGouv\Config\Exception\ConfigurationException;

class ConfigManager
{
    private $config;

    public function __construct( $config = [])
    {
        $this->config = $config;
    }

    public function getResource($resource)
    {
        if (!isset($this->config['resources'][$resource]))
            throw new ConfigurationException(sprintf('Resource %s is not set check config', $resource));
        return $this->config['resources'][$resource];
    }


}