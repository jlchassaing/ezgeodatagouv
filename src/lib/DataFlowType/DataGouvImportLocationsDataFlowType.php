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
use GieNat\Common\FrontDisplayBundle\DataFlow\FileReader;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DataGouvImportLocationsDataFlowType extends AbstractDataflowType implements DataflowTypeInterface
{
    /** @var \CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter  */
    protected $contentWriter;

    /** @var \CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactory  */
    protected $contentStructureFactory;

    /** @var \eZGeoDataGouv\DataFlow\FileReader  */
    protected $fileReader;

    public function __construct(
        ContentWriter $contentWriter,
        ContentStructureFactory $contentStructureFactory,
        FileReader $fileReader)
    {
        $this->contentWriter = $contentWriter;
        $this->contentStructureFactory = $contentStructureFactory;
        $this->fileReader = $fileReader;
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

        $builder->setReader($this->fileReader->read($options['csv-source']));

        $builder->addWriter($this->contentWriter);

        $builder->addStep(function ($data) use ($options) {
            $mapping = $options['mapping'];
            if (!isset($data[$mapping['id_key']])) {
                return false;
            }

            $remoteId = sprintf('location-%d', $data[$mapping['id_key']]);

            $contentData['name'] = $data[$mapping['name']];
            $contentData['address'] = [
                'longitude' => (float) $data[$mapping['longitude']],
                'latitude' => (float) $data[$mapping['latitude']],
                'address' => $data[$mapping['address']],
                ];


            $structure =  $this->contentStructureFactory->transform(
                $contentData,
                $remoteId,
                'fre-FR',
                'location',
                $options['parent-location-id']
            );
            dump(get_class($structure));
            return $structure;
        });
        $builder->addWriter($this->contentWriter);
    }

    protected function configureOptions(OptionsResolver $optionsResolver): void
    {
        $optionsResolver->setDefaults(['csv-source' => '', 'parent-location-id' => null, 'mapping' => []]);
        $optionsResolver->setRequired(['csv-source', 'parent-location-id', 'mapping']);
        // 'identifiant_public_unite'
    }

}