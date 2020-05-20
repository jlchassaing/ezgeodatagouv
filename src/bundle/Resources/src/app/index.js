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
import { useSymfonyContext } from '../context/symfony'

const GeoFinder = () => {
  const [coordinates, setCoordinates] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const addresses = useAddressSearch(searchTerm)
  const { label } = useSymfonyContext()

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleDoSearch = event => {
    event.preventDefault()
    setSearchTerm(searchTerm)
  }

  return (
    <>
      <label id="combosearch_label" class="sr-only">
        {label}
      </label>
      <Combobox
        style={{ display: 'inline-block', width: '75%' }}
        aria-labelledby="combosearch_label"
        onSelect={value => {
          const coords = addresses.find(a => a.properties.label === value)
            .geometry.coordinates
          coords.reverse()
          setCoordinates(coords)
        }}
      >
        <ComboboxInput
          selectOnClick
          placeholder="Addresse..."
          className="form-control ezgeodatagouv__search--input"
          onChange={handleSearchTermChange}
        />
        {addresses && (
          <ComboboxPopover className="shadow-popup">
            {addresses.length > 0 ? (
              <ComboboxList>
                {addresses.map(
                  ({ properties: { id, name, postcode, city, label } }) => (
                    <ComboboxOption key={id} value={label}>
                      {name !== city
                        ? `${name} ${postcode} ${city}`
                        : `${name} ${postcode}`}
                    </ComboboxOption>
                  )
                )}
              </ComboboxList>
            ) : (
              <span style={{ display: 'block', margin: 8 }}>
                No results found
              </span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>

      <button
        className="button btn bnt-submit"
        type="submit"
        style={{
          padding: '6px 10px 7px',
          margin: '0 0 0 10px',
          verticalAlign: 'baseline',
        }}
        onClick={handleDoSearch}
      >
        Ok
      </button>

      <ResultMap coordinates={coordinates} />
    </>
  )
}

export default GeoFinder
