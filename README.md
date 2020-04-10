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

### Set a resource

Resouces are set in a config.yml file

```yaml
ez_geo_data_gouv:
    resources:
        resource_key_name:
            do_geocoding: true|false
            id_key: csv_uniq_id_key
            name: csv_field_used_for_name
            address:
                longitude: longitude
                latitude: latitude
                address: csv_field_used_for_full_address
            fields: # if using a custom class identifier cet specific fields
                url:
                    datatype: ezurl
                    value: url
            geocoding_fields:
                columns:
                    - commune # csv field to send for geo coding in geo.api.gouv
                    - voie
                postcode: code_postal 
                citycode: code_commune_insee
                result_columns:
                    - result_label # set specific fields for result if not set default are longitude and latidue
```

The settings help set how the csv fields will be used.
The ressoure name must be passed in option to the import script

The fields sections helps you add specific content_type fields. The key is the conten_type field identifier.
the datatype is te content_type field datatype and value is the csv field name


### running import

The import script alias is 'dtgi'

If you do not provide siteaccess parameter the default siteaccess will be used

The options to provide are : 

* the parent_location_id where contents will be added
* the csv_source path where the csv source is can be online (for now the file must be semicolon field seperated and quotation marks)
* resource name 
 
```shell script
bin/console code-rhapsodie:dataflow:execute --siteaccess=<siteaccess> dtgi  '{"parent-location-id":<locationId>,"csv-source":"<csvpath>","resource":"<resource_name>"}'
```

## Todos

- [X] add csv config
- [ ] if no location parameters are given (longitude, latitude) the geocode before importing data
- [ ] set a mapping configuration interface and only pass a configuration id to import script
- [ ] add parameters to conactenate fields to build the adress field
