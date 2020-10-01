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
use eZ\Publish\Core\MVC\Symfony\View\ContentView;
use EzSystems\EzPlatformRest\Server\Controller;
use eZ\Publish\Core\REST\Server\Values;
use eZGeoDataGouvBundle\Rest\Values\LocationContent;
use eZGeoDataGouvBundle\Rest\Values\RestContent;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class DefaultController extends Controller
{
    /**
     * @param float $latitude
     * @param float $longitude
     * @param int $distance
     * @param string $contentTypeIdentifier
     * @param int $nbResults
     *
     * @return \eZ\Publish\Core\REST\Server\Values\ContentList
     * @throws \eZ\Publish\API\Repository\Exceptions\InvalidArgumentException
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function search(
        $latitude,
        $longitude,
        $distance = 10,
        $contentTypeIdentifier = 'location',
        $nbResults = 5
    ) {
        $searchService = $this->repository->getSearchService();
        $contentTypeService = $this->repository->getContentTypeService();
        $locationService = $this->repository->getLocationService();
        $contentService = $this->repository->getContentService();

        $contentType = $contentTypeService->loadContentTypeByIdentifier($contentTypeIdentifier);
        $addressContentTypeAttributeIdentifier = 'address';

        foreach ($contentType->fieldDefinitions as $fieldDefinition) {
            if ($fieldDefinition->fieldTypeIdentifier === 'ezgmaplocation') {
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
                $latitude,
                $longitude
            ),
        ];

        $query->sortClauses = [
            new Query\SortClause\MapLocationDistance(
                $contentTypeIdentifier,
                $addressContentTypeAttributeIdentifier,
                $latitude,
                $longitude
            ),
        ];

        $query->limit = $nbResults;
        $query->query = new Query\Criterion\LogicalAnd($criterions);

        $results = $searchService->findContent($query);

        $siteaccess = $this->container->get('ezpublish.siteaccess')->name;
        $contentValues = [];
        foreach ($results->searchHits as $searchHit) {
            /** @var \eZ\Publish\API\Repository\Values\Content\Content $content */
            $content = $searchHit->valueObject;
            $distance = $searchHit->score;

            $mainLocation = $locationService->loadLocation($content->contentInfo->mainLocationId);
            $relations = $contentService->loadRelations($content->getVersionInfo());
            $siteaccess = $this->container->get('ezpublish.siteaccess');

            $path = $this->router->generate($mainLocation,['siteaccess' => $siteaccess->name], UrlGeneratorInterface::ABSOLUTE_PATH);
            
            $contentValues[] = new LocationContent(
                $content->contentInfo,
                null,
                $content,
                $contentType,
                $relations,
                $path,
                $distance
            );
        }

        return new Values\ContentList($contentValues);
    }
}
