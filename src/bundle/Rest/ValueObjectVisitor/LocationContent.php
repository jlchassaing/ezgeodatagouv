<?php

namespace eZGeoDataGouvBundle\Rest\ValueObjectVisitor;

use eZ\Publish\Core\REST\Common\Output\Generator;
use eZ\Publish\Core\REST\Common\Output\Visitor;
use eZ\Publish\Core\REST\Server\Output\ValueObjectVisitor\RestContent;
use eZGeoDataGouvBundle\Rest\Values\LocationContent as Value;

/**
 * CreatedContent value object visitor.
 */
class LocationContent extends RestContent
{
    /**
     * Visit struct returned by controllers.
     *
     * @param \eZ\Publish\Core\REST\Common\Output\Visitor $visitor
     * @param \eZ\Publish\Core\REST\Common\Output\Generator $generator
     * @param Value $data
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
