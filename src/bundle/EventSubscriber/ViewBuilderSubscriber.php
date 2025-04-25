<?php

namespace eZGeoDataGouvBundle\EventSubscriber;

use Ibexa\Core\MVC\Symfony\View\Event\FilterViewParametersEvent;
use Ibexa\Core\MVC\Symfony\View\ViewEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Collects parameters for the ViewBuilder from the Request.
 */
class ViewBuilderSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [ViewEvents::FILTER_VIEW_PARAMETERS => 'addDistanceParameter'];
    }

    /**
     * Adds all the distance to the parameters.
     */
    public function addDistanceParameter(FilterViewParametersEvent $event): void
    {
        $parameterBag = $event->getParameterBag();
        $builderParameters = $event->getBuilderParameters();

        if (!$this->isEzGeoDataGouvRoute($builderParameters)) {
            return;
        }

        if (isset($builderParameters['distance']) && !$parameterBag->has('distance')) {
            $parameterBag->add(['distance' => $builderParameters['distance']]);
        }
    }

    private function isEzGeoDataGouvRoute(array $parameters): bool
    {
        return isset($parameters['_route']) && 'EzGeoDataGouv_content_view' === $parameters['_route'];
    }
}
