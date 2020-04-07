# ezgeodatagouv
eZ Geo Data Gouv project

This bundle has two usecases :
* help import a csv location list and give geocoding functionnality based on [geo.api.gouv.fr](https://geo.api.gouv.fr/adresse)
* give a react search form with auto completion also based on geo data gouv

Contents will be imported in eZ Platform contents indexed by solr to help location proximiy search

## installation 

This release is ment to be installed on eZ Platform 2.5 and Symfony 3.4

This bundle uses eZ Platform and [Code Rhapsodie eZ Dataflow Bundle](https://github.com/code-rhapsodie/ezdataflow-bundle) 

composer require jlchassaing/ezgeodatagouv


in AppKernel.php add

```php
<?php
// app/AppKernel.php

public function registerBundles()
{
    $bundles = [
        // ...
        new CodeRhapsodie\DataflowBundle\CodeRhapsodieDataflowBundle(),
        new CodeRhapsodie\EzDataflowBundle\CodeRhapsodieEzDataflowBundle(),
        new eZGeoDataGouvBundle\EzGeoDataGouvBundle(),
        // ...
    ];
}
```

Create the new location content type 

```
bin/console kaliop:migration:migrate --siteaccess=rec_admin --path=vendor/jlchassaing/ezgeodatagouv/src/bundle/MigrationVersions/20200407105655_create_location_content_type.yml
```

## how to import data


The import script alias is 'dtgi'

If you do not provide siteaccess parameter the default siteaccess will be used

The options to provide are : 

* the parent_location_id where contents will be added
* the csv_source path where the csv source is can be online (for now the file must be semicolon field seperated and quotation marks)
* filed mapping 

The field mapping is important here to help match csv parameters to the eZ Content fields.
By defaut you must provide :
 * **id_key** : identifier field
 * **name** : the location name
 * **latitude** : the latitude csv field
 * **longitude** : the longitude csv field
 * **address** : the adresse field
 

```shell script
bin/console code-rhapsodie:dataflow:execute --siteaccess=<siteaccess> dtgi  '{"parent-location-id":<locationId>,"csv-source":"<csvpath>","mapping":{"id_key":"<id_field>", "name":"<name_field>","longitude":"<longitude_field>","latitude":"<latitude_field>","address":"<address_field>"}}'
```

## Todos

- [ ] add csv config
- [ ] if no location parameters are given (longitude, latitude) the geocode before importing data
- [ ] set a mapping configuration interface and only pass a configuration id to import script
- [ ] add parameters to conactenate fields to build the adress field
