<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\DataFlowType;

use CodeRhapsodie\DataflowBundle\DataflowType\AbstractDataflowType;
use CodeRhapsodie\DataflowBundle\DataflowType\DataflowBuilder;
use CodeRhapsodie\DataflowBundle\DataflowType\DataflowTypeInterface;
use CodeRhapsodie\DataflowBundle\DataflowType\Result;
use CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactory;
use CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactoryInterface;
use CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter;
use eZGeoDataGouv\DataFlow\FileReader;
use eZGeoDataGouv\DataFlow\GeocodingFileReader;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DataGouvImportLocationsDataFlowType extends AbstractDataflowType implements DataflowTypeInterface
{
    /** @var \CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter  */
    protected $contentWriter;

    /** @var \CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactory  */
    protected $contentStructureFactory;

    /** @var \eZGeoDataGouv\DataFlow\FileReader  */
    protected $fileReader;

    /** @var \eZGeoDataGouv\DataFlow\GeocodingFileReader  */
    protected $geocodingFileReader;

    protected $config;


    public function __construct(
        ContentWriter $contentWriter,
        ContentStructureFactory $contentStructureFactory,
        FileReader $fileReader,
        GeocodingFileReader $geocodingFileReader,
        $config)
    {

        $this->contentWriter = $contentWriter;
        $this->contentStructureFactory = $contentStructureFactory;
        $this->fileReader = $fileReader;
        $this->geocodingFileReader = $geocodingFileReader;
        $this->config = $config;
    }

    public function getLabel(): string
    {
        return 'DataGouv Import';
    }

    public function getAliases(): iterable
    {
        return ['dtgi'];
    }

    protected function buildDataflow(DataflowBuilder $builder, array $options): void
    {
        $resourceName = $options['resource'];
        $config = $this->config[$resourceName];

        $builder->setReader($this->getReader($config)->read($options['csv-source']));
        $builder->addWriter($this->contentWriter);
        $builder->addStep(function ($data) use ($config,$options) {

            if (!isset($data[$config['id_key']])) {
                return false;
            }


            $remoteId = sprintf('location-%d', $data[$config['id_key']]);

            $contentData['name'] = $data[$config['name']];
            $contentData['address'] = [
                'longitude' => (float) $data[$config['address']['longitude']],
                'latitude' => (float) $data[$config['address']['latitude']],
                'address' => $data[$config['address']['address']],
                ];

            foreach ($config['fields'] as $key=>$field) {
                switch ($field['datatype']){
                    case 'ezurl':
                        $contentData[$key] = ['link' => $data[$field['value']]];
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
        $builder->addWriter($this->contentWriter);
    }

    protected function configureOptions(OptionsResolver $optionsResolver): void
    {
        $optionsResolver->setDefaults(['csv-source' => '', 'parent-location-id' => null, 'resource']);
        $optionsResolver->setRequired(['csv-source', 'parent-location-id', 'resource']);
    }

    /**
     * @param bool $do_geocoding
     *
     * @return \eZGeoDataGouv\DataFlow\ReaderInterface
     */
    protected function getReader($resourceConfig)
    {
        if ($resourceConfig['do_geocoding'] === true)
            return $this->geocodingFileReader->init($resourceConfig);
        else
            return $this->fileReader->init($resourceConfig);
    }
}