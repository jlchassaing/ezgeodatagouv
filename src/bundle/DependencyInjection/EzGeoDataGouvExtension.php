<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouvBundle\DependencyInjection;

use eZ\Bundle\EzPublishCoreBundle\DependencyInjection\Configuration\SiteAccessAware\ConfigurationProcessor;
use eZGeoDataGouv\Config\ConfigManager;
use Symfony\Component\Config\Definition\Processor;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\Yaml\Yaml;


class EzGeoDataGouvExtension extends Extension implements PrependExtensionInterface
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');

        $configuration = new Configuration();

        $config = $this->processConfiguration($configuration, $configs);

        $definition = $container->getDefinition('eZGeoDataGouv\Config\ConfigManager');
        $definition->setArgument(0, $config);

        $definition = $container->getDefinition('eZGeoDataGouv\DataFlow\GeocodingFileReader');
        $definition->setArgument(0, $config['api_url']);
    }

    public function prepend(ContainerBuilder $container)
    {
        $this->prependFileContent($container, 'blocks.yml');
        $this->prependFileContent($container, 'views.yml');
    }

    public function prependFileContent(ContainerBuilder $container, $file)
    {
        $configs = Yaml::parseFile(__DIR__ . '/../Resources/config/' . $file);
        foreach ($configs as $parameter => $config) {
            $container->prependExtensionConfig($parameter, $config);
        }
    }


}