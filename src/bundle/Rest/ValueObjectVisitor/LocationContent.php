<?php

namespace eZGeoDataGouvBundle\Rest\ValueObjectVisitor;



use eZGeoDataGouvBundle\Rest\Values\LocationContent as Value;
use EzSystems\EzPlatformRest\Output\Generator;
use EzSystems\EzPlatformRest\Output\Visitor;
use EzSystems\EzPlatformRest\Server\Output\ValueObjectVisitor\RestContent;

/**
 * CreatedContent value object visitor.
 */
class LocationContent extends RestContent
{
    /**
     * @param \EzSystems\EzPlatformRest\Output\Visitor $visitor
     * @param \EzSystems\EzPlatformRest\Output\Generator $generator
     * @param \EzSystems\EzPlatformRest\Server\Values\RestContent $data
     */
    public function visit(Visitor $visitor, Generator $generator, $data)
    {
        $generator->startHashElement('Content');
        $generator->startAttribute('distance', $data->distance);
        $generator->endAttribute('distance');

        parent::visit($visitor, $generator, $data);

        $generator->endHashElement('Content');
    }
}
