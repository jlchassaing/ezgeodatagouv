<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouvBundle\Rest;


use Behat\Behat\Definition\SearchResult;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion\ContentTypeIdentifier;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion\MapLocationDistance;
use eZ\Publish\API\Repository\Values\Content\Query\Criterion\Operator;
use eZ\Publish\API\Repository\Values\Content\Query;
use eZ\Publish\Core\REST\Server\Controller;
use eZ\Publish\Core\REST\Server\Values;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @param $longitude
     * @param $latitude
     * @param int $distance
     * @param string $contentTypeIdentifier
     * @param int $nbResults
     *
     * @return \eZ\Publish\Core\REST\Server\Values\ContentList
     * @throws \eZ\Publish\API\Repository\Exceptions\InvalidArgumentException
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function search($longitude,$latitude,$distance = 10, $contentTypeIdentifier = 'location', $nbResults = 5)
    {
        $searchService = $this->repository->getSearchService();
        $contentTypeService = $this->repository->getContentTypeService();
        $locationService = $this->repository->getLocationService();
        $contentService = $this->repository->getContentService();

        $contentType = $contentTypeService->loadContentTypeByIdentifier($contentTypeIdentifier);
        $addressContentTypeAttributeIdentifier = 'address';

        foreach ($contentType->fieldDefinitions as $fieldDefinition) {
            if ($fieldDefinition->fieldTypeIdentifier === 'ezaddress') {
                $addressContentTypeAttributeIdentifier = $fieldDefinition->identifier;
                break;
            }
        }

       $query = new Query();

        /**
         * Latitude:	45.96062
        Longitude:	5.33769


        $longitude = 5.33769;
        $latitude = 45.96062;

         * 45.97419/5.305095
        $coord = [45.97419 , 5.305095];
        $longitude =  5.372747;
         */

        $criterions = [
            new ContentTypeIdentifier([$contentTypeIdentifier]),
            new MapLocationDistance(
                $addressContentTypeAttributeIdentifier,
                Operator::LTE,
                $distance,
                $longitude,
                $latitude),
        ];

        $query->limit = $nbResults;
        $query->query = new Query\Criterion\LogicalAnd($criterions);

        $results = $searchService->findContent($query);

        $contentValues = [];
        foreach ($results->searchHits as $searchHit) {
            /** @var \eZ\Publish\API\Repository\Values\Content\Content $content */
            $content = $searchHit->valueObject;

            $mainLocation = $locationService->loadLocation($content->contentInfo->mainLocationId);
            $relations = $contentService->loadRelations($content->getVersionInfo());
            $path = $this->router->generate($mainLocation);

            $contentValues[] = new Values\RestContent(
                $content->contentInfo,
                null,
                $content,
                $contentType,
                $relations,
                $path);
        }

        return new Values\ContentList($contentValues);
    }

}