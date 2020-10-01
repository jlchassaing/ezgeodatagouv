<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouvBundle\DependencyInjection;


use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;


/**
 * Class Configuration
 * @package eZGeoDataGouvBundle\DependencyInjection
 *
 * ez_geo_data_gouv:
 *  resources:
 *      gie_unites:
 *          do_geocoding: false
 *          mapping:
 *              id_key:
 *              longitude:
 *              latitude:
 *              adresse:
 *          geocoding_fields:
 *              columns:
 *                  - voie
 *                  - commune
 *              postcode:
 *              inseecode:
 *              result_columns:
 *                  - longitude
 *                  - latitude
 *
 *
 */
class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder('ez_geo_data_gouv');
        $rootNode = $treeBuilder->getRootNode();

        $rootNode
            ->children()
                ->scalarNode('api_url')->defaultValue('https://api-adresse.data.gouv.fr/search/csv/')->end()
                ->arrayNode('resources')
                ->arrayPrototype()
                ->children()
                    ->booleanNode('do_geocoding')->defaultFalse()->end()
                    ->scalarNode('content_type')->isRequired()
                    ->info('content_type identifier to import content')->end()
                    ->scalarNode('language')->defaultValue('eng-GB')->end()
                    ->scalarNode('id_key')->isRequired()
                        ->info('csv unique key fields that will be used to set content remote_id')
                    ->end()
                    ->scalarNode('name')->isRequired()
                        ->info('csv field name to be used as content name')
                    ->end()
                    ->scalarNode('regex_name')
                        ->info('regex to apply to the name the first selected part will be used as name')
                    ->end()
                    ->scalarNode('address_field_identifier')
                        ->info('content type address field identifier')
                        ->defaultValue('address')
                    ->end()
                    ->arrayNode('address')
                        ->info('must be set if go_coding parameter is false set the csv fields used to set the location')
                        ->children()
                            ->scalarNode('longitude')->isRequired()->end()
                            ->scalarNode('latitude')->isRequired()->end()
                            ->scalarNode('address')->isRequired()->end()
                        ->end()
                    ->end()
                    ->arrayNode('fields')
                            ->arrayPrototype()
                                ->children()
                                    ->scalarNode('datatype')->isRequired()
                                        ->validate()
                                            ->ifNotInArray(['ezurl', 'ezstring', 'ezmatrix'])
                                            ->thenInvalid("Should be of type ezstring, ezurl or ezmatrix")
                                        ->end()
                                    ->end()
                                    ->variableNode('value')->isRequired()->end()
                                ->end()
                            ->end()

                    ->end()
                    ->arrayNode('geocoding_fields')
                        ->children()
                            ->arrayNode('columns')
                                ->scalarPrototype()->end()
                            ->isRequired()
                            ->end()
                            ->scalarNode('postcode')->info('set the csv postcode field')->end()
                            ->scalarNode('citycode')->info('set the insee city code')->end()
                            ->arrayNode('result_columns')
                                ->scalarPrototype()->end()
                                ->info('set returned results from geo.api.gouv.fr ')
                            ->end()
                        ->end()
                        ->beforeNormalization()
                        ->always(function($v){

                            if (!array_key_exists('result_columns',$v)){
                                $v['result_columns'] = ['longiude', 'latitude'];
                            }
                            else{
                                if(!in_array('longitude', $v['result_columns'])){
                                    $v['result_columns'][] = 'longitude';
                                }
                                if (!in_array('latitude', $v['result_columns'])){
                                    $v['result_columns'][] = 'latitude';
                                }
                            }

                            return $v;
                        })
                        ->end()
                    ->end()
                ->end()
                ->validate()
                    ->ifTrue(function ($v){
                        if (!$v['do_geocoding']){
                            return !array_key_exists('address',$v) or !is_array($v['address']);
                        } else {
                            return !array_key_exists('geocoding_fields', $v);
                        }
                    })
                    ->thenInvalid('Invalid configuration if do_geocoding is true must set geocoding_fields if false must set address')
                ->end()
            ->end();

        return $treeBuilder;
    }
}