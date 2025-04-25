<?php

namespace eZGeoDataGouvBundle\Rest\ValueObjectVisitor;

use Ibexa\Contracts\Rest\Output\Generator;
use Ibexa\Contracts\Rest\Output\Visitor;
use Ibexa\Rest\Server\Output\ValueObjectVisitor\RestContent;

/**
 * CreatedContent value object visitor.
 */
class LocationContent extends RestContent
{
    /**
     * @param \Ibexa\Contracts\Rest\Output\Visitor $visitor
     * @param \Ibexa\Contracts\Rest\Output\Generator $generator
     * @param \Ibexa\Rest\Server\Values\RestContent $data
     */
    public function visit(Visitor $visitor, Generator $generator, $data): void
    {
        $generator->startHashElement('Content');
        $generator->startAttribute('distance', $data->distance);
        $generator->endAttribute('distance');

        parent::visit($visitor, $generator, $data);

        $generator->endHashElement('Content');
    }
}
