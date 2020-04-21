<?php
/**
 * @author jlchassaing <jlchassaing@gmail.com>
 * @licence MIT
 */

namespace eZGeoDataGouv\Tests\DataFlow;


use eZGeoDataGouv\DataFlow\FileReader;
use eZGeoDataGouv\DataFlow\FileReaderException;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Filesystem\Filesystem;

class FileReaderTest extends TestCase
{

    public function testFileDoesNotExist()
    {
        $fileReader = new FileReader();
        $filename = '/var/www/test.txt';
        $this->expectException(FileReaderException::class);
        $reader = $fileReader->read($filename);
        foreach ($reader as $item) {

       }
    }

    private function buildCsvData($nbItems, $nbLines,$makeLongKeys = false)
    {
        $result = ['csv' => '', 'expected' => []];
        $temp = [];
        $key = 'csv_data_key';
        $value = 'csv_data_value';
        $arrayKeys = [];

        $nbLines++;

        for($lineIndex = 0; $lineIndex <$nbLines; $lineIndex++) {
            $linePrefix = $lineIndex === 0 ? $key : $value;
            $temp = [];
            for($itemIndex = 0; $itemIndex < $nbItems; $itemIndex++) {
                $newItem = $linePrefix.'_'.$itemIndex;
                $newItem = $makeLongKeys ? md5($newItem) : $newItem;
                if ($lineIndex === 0) {
                    $arrayKeys[] = $newItem;
                }
                $temp[] = $newItem;
            }
            $result['csv'] .= '"'.implode('";"', $temp).'"'.PHP_EOL;
            if ($lineIndex > 0)

                $result['expected'][]= array_combine($arrayKeys,$temp);
        }
        return $result;
    }

    function testGetData()
    {
        $fileSystem = new Filesystem();

        $tmpFile = $fileSystem->tempnam('/tmp','test_data_file.csv');

        $testData = $this->buildCsvData(5,2);
        $fileSystem->appendToFile($tmpFile,$testData['csv']);

        $newFileReader = new FileReader();
        $index = 0;
        $continue = true;

        $reader = $newFileReader->read($tmpFile);
        foreach ($reader as $item) {

            if (!empty($item)) {
                foreach ($item as $key => $value) {
                    $this->assertEquals($value,$testData['expected'][$index][$key]);
                }
            }
        }
        $fileSystem->remove($tmpFile);
    }

    function testGetLargeData()
    {
        $fileSystem = new Filesystem();

        $tmpFile = $fileSystem->tempnam('/tmp','test_data_file.csv');

        $testData = $this->buildCsvData(50,5,true);
        $fileSystem->appendToFile($tmpFile,$testData['csv']);

        $newFileReader = new FileReader();
        $index = 0;
        $continue = true;

        $reader = $newFileReader->read($tmpFile);
        foreach ($reader as $item) {

            if (!empty($item)) {
                foreach ($item as $key => $value) {
                    $this->assertEquals($value,$testData['expected'][$index][$key]);
                }
            }
        }
        $fileSystem->remove($tmpFile);
    }

}