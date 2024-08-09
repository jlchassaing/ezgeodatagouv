<?php

declare(strict_types=1);
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 *
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlowType;

use CodeRhapsodie\DataflowBundle\DataflowType\AbstractDataflowType;
use CodeRhapsodie\DataflowBundle\DataflowType\DataflowBuilder;
use CodeRhapsodie\DataflowBundle\DataflowType\DataflowTypeInterface;
use CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactory;
use CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter;
use eZGeoDataGouv\Config\ConfigManager;
use eZGeoDataGouv\Config\Exception\ConfigurationException;
use eZGeoDataGouv\DataFlow\FileReader;
use eZGeoDataGouv\DataFlow\GeocodingFileReader;
use eZGeoDataGouv\DataFlow\ReaderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DataGouvImportLocationsDataFlowType extends AbstractDataflowType implements DataflowTypeInterface
{
    protected ContentWriter $contentWriter;

    protected ContentStructureFactory $contentStructureFactory;

    protected FileReader $fileReader;

    protected GeocodingFileReader $geocodingFileReader;

    protected ConfigManager $configManager;

    /**
     * DataGouvImportLocationsDataFlowType constructor.
     */
    public function __construct(
        ContentWriter $contentWriter,
        ContentStructureFactory $contentStructureFactory,
        FileReader $fileReader,
        GeocodingFileReader $geocodingFileReader,
        ConfigManager $configManager
    ) {
        $this->contentWriter = $contentWriter;
        $this->contentStructureFactory = $contentStructureFactory;
        $this->fileReader = $fileReader;
        $this->geocodingFileReader = $geocodingFileReader;
        $this->configManager = $configManager;
    }

    public function getLabel(): string
    {
        return 'DataGouv Import';
    }

    public function getAliases(): iterable
    {
        return ['dtgi'];
    }

    /**
     * @throws ConfigurationException
     */
    protected function buildDataflow(DataflowBuilder $builder, array $options): void
    {
        $resourceName = $options['resource'];
        $config = $this->configManager->getResource($resourceName);

        $builder->setReader($this->getReader($config)->read($options['csv-source']));
        $this->addFilterTask($builder);
        $this->addCsvFieldMapping($builder, $options, $config);
        $builder->addWriter($this->contentWriter);
    }

    /**
     * Use this methods to manage fields in data before creating content
     * one usecase could be to format the naming field.
     */
    protected function addFilterTask(DataflowBuilder $builder): void
    {
        $builder->addStep(function ($data) {
            /* Put your code here to invalidate a row return null */
            return $data;
        });
    }

    protected function addCsvFieldMapping(DataflowBuilder $builder, $options, $config): void
    {
        $builder->addStep(function ($data) use ($config, $options) {
            if (!isset($data[$config['id_key']])) {
                return false;
            }

            $remoteId = sprintf('%s-%d', $config['content_type'], $data[$config['id_key']]);

            $contentData['name'] = $data[$config['name']];
            $contentData[$config['address_field_identifier']] = [
                'longitude' => (float) $data[$config['address']['longitude']],
                'latitude' => (float) $data[$config['address']['latitude']],
                'address' => $data[$config['address']['address']],
            ];

            foreach ($config['fields'] as $key => $field) {
                switch ($field['datatype']) {
                    case 'ezurl':
                        $contentData[$key] = ['link' => $data[$field['value']]];
                        break;
                    case 'ezmatrix':
                        $contentData[$key] = array_map(function ($row) use ($data) {
                            return array_map(function ($col) use ($data) {
                                return $data[$col] ?? $col;
                            }, $row);
                        }, $field['value']);
                        break;
                    default:
                        $contentData[$key] = $data[$field['value']];
                }
            }

            return $this->contentStructureFactory->transform(
                $contentData,
                $remoteId,
                $config['language'],
                $config['content_type'],
                $options['parent-location-id']
            );
        });
    }

    protected function configureOptions(OptionsResolver $optionsResolver): void
    {
        $optionsResolver->setDefaults(['csv-source' => '', 'parent-location-id' => null, 'resource']);
        $optionsResolver->setRequired(['csv-source', 'parent-location-id', 'resource']);
    }

    /**
     * @return ReaderInterface
     */
    protected function getReader($resourceConfig): ReaderInterface
    {
        if (true === $resourceConfig['do_geocoding']) {
            return $this->geocodingFileReader->init($resourceConfig);
        } else {
            return $this->fileReader->init($resourceConfig);
        }
    }
}
