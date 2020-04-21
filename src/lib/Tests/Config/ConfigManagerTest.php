<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\Tests\Config;

use eZGeoDataGouv\Config\ConfigManager;
use eZGeoDataGouv\Config\Exception\ConfigurationException;
use PHPUnit\Framework\TestCase;

class ConfigManagerTest extends TestCase
{
    public function testGetResource()
    {
        $resourceName = 'test';
        $config = new ConfigManager(['resources' => [$resourceName => []]]);

        $resource = $config->getResource($resourceName);
        $this->assertEmpty($resource);
    }

    public function testFailGetResource()
    {
        $resourceName = 'test';
        $config = new ConfigManager(['resources' => []]);

        $this->expectException(ConfigurationException::class);

        $resource = $config->getResource($resourceName);
    }

}