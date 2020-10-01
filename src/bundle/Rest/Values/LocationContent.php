<?php

namespace eZGeoDataGouvBundle\Rest\Values;

use eZ\Publish\API\Repository\Values\Content\Content;
use eZ\Publish\API\Repository\Values\Content\ContentInfo;
use eZ\Publish\API\Repository\Values\Content\Location;
use eZ\Publish\API\Repository\Values\ContentType\ContentType;
use EzSystems\EzPlatformRest\Server\Values\RestContent;


class LocationContent extends RestContent
{
    public $distance;

    public function __construct(
        ContentInfo $contentInfo,
        Location $mainLocation = null,
        Content $currentVersion = null,
        ContentType $contentType = null,
        array $relations = null,
        $path = null,
        $distance = 0
    )
    {
        parent::__construct($contentInfo, $mainLocation, $currentVersion, $contentType, $relations, $path);

        $this->distance = $distance;
    }

}