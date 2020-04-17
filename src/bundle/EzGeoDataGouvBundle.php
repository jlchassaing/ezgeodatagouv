<?php
/**
 * Created by PhpStorm.
 * User: jlchassaing
 * Date: 05/10/2018
 * Time: 09:56
 */

namespace eZGeoDataGouvBundle;

use eZGeoDataGouvBundle\DependencyInjection\EzGeoDataGouvExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class EzGeoDataGouvBundle extends Bundle
{
    protected $name = 'EzGeoDataGouvBundle';

    public function getContainerExtension()
    {
        return new EzGeoDataGouvExtension();
    }

}