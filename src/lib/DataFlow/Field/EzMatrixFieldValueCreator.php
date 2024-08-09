<?php

declare(strict_types=1);

namespace eZGeoDataGouv\DataFlow\Field;

use CodeRhapsodie\EzDataflowBundle\Core\Field\FieldValueCreatorInterface;
use Ibexa\Core\FieldType\Value;
use Ibexa\FieldTypeMatrix\FieldType\Value as EzMatrix;

class EzMatrixFieldValueCreator implements FieldValueCreatorInterface
{
    public function supports(string $fieldTypeIdentifier): bool
    {
        return 'ezmatrix' === $fieldTypeIdentifier;
    }

    public function createValue(string $fieldTypeIdentifier, $hash): Value
    {
        return new EzMatrix(array_map(function ($row) {
            return new EzMatrix\Row($row);
        }, $hash));
    }
}
