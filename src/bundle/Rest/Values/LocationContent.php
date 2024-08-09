<?php

namespace eZGeoDataGouvBundle\Rest\Values;

use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\ContentInfo;
use Ibexa\Contracts\Core\Repository\Values\Content\Location;
use Ibexa\Contracts\Core\Repository\Values\ContentType\ContentType;
use Ibexa\Rest\Server\Values\RestContent;

class LocationContent extends RestContent
{
    public int $distance;

    public function __construct(
        ContentInfo $contentInfo,
        ?Location $mainLocation = null,
        ?Content $currentVersion = null,
        ?ContentType $contentType = null,
        ?array $relations = null,
        $path = null,
        $distance = 0
    ) {
        parent::__construct($contentInfo, $mainLocation, $currentVersion, $contentType, $relations, $path);

        $this->distance = $distance;
    }
}
