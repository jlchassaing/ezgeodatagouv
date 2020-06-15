<?php

declare(strict_types=1);

namespace eZGeoDataGouv\DataFlow\Field;

use CodeRhapsodie\EzDataflowBundle\Core\Field\FieldValueCreatorInterface;
use EzSystems\EzPlatformMatrixFieldtype\FieldType\Value as EzMatrix;
use eZ\Publish\Core\FieldType\Value;

class EzMatrixFieldValueCreator implements FieldValueCreatorInterface
{

    public function supports(string $fieldTypeIdentifier): bool
    {
        return $fieldTypeIdentifier === 'ezmatrix';
    }

    public function createValue(string $fieldTypeIdentifier, $hash): Value
    {
        return new EzMatrix(array_map(function ($row) {
            return new EzMatrix\Row($row);
        }, $hash));
    }
}
