import React, { useEffect, useState, useRef } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox'

import useAddressSearch from '../hooks/use-address-search'
import ResultMap from './result-map'

const GeoFinder = () => {
  const [coordinates, setCoordinates] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const addresses = useAddressSearch(searchTerm)

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Combobox
        onSelect={value => {
          const coords = addresses.find(a => a.properties.label === value)
            .geometry.coordinates
          coords.reverse()
          setCoordinates(coords)
        }}
      >
        <ComboboxInput
          selectOnClick
          className="ezgeodatagouv__search--input"
          onChange={handleSearchTermChange}
        />
        {addresses && (
          <ComboboxPopover className="shadow-popup">
            {addresses.length > 0 ? (
              <ComboboxList>
                {addresses.map(({ properties: { id, label } }) => (
                  <ComboboxOption key={id} value={label} />
                ))}
              </ComboboxList>
            ) : (
              <span style={{ display: 'block', margin: 8 }}>
                No results found
              </span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>
      <ResultMap coordinates={coordinates} />
    </>
  )
}

export default GeoFinder
