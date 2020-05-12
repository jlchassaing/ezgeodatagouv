<?php

namespace eZGeoDataGouvBundle\EventSubscriber;

use eZ\Publish\Core\MVC\Symfony\View\Event\FilterViewParametersEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use eZ\Publish\Core\MVC\Symfony\View\ViewEvents;
use Symfony\Component\HttpFoundation\ParameterBag;

/**
 * Collects parameters for the ViewBuilder from the Request.
 */
class ViewBuilderSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [ViewEvents::FILTER_VIEW_PARAMETERS => 'addDistanceParameter'];
    }

    /**
     * Adds all the distance to the parameters.
     *
     * @param FilterViewParametersEvent $event
     */
    public function addDistanceParameter(FilterViewParametersEvent $event)
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
        return isset($parameters['_route']) && $parameters['_route'] === 'EzGeoDataGouv_content_view';
    }
}
