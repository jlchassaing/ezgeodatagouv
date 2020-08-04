import React, { useState, useEffect } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox'

import useAddressSearch from '../hooks/use-address-search'
import usePosition from '../hooks/use-geolocation'
import ResultMap from './result-map'
import { useSymfonyContext } from '../context/symfony'
import { Target } from '../utils/icons'

const getLabel = ({ name, postcode, city }) =>
  name !== city ? `${name} ${postcode} ${city}` : `${name} ${postcode}`

const GeoFinder = () => {
  const [coordinates, setCoordinates] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [geo, setGeo] = useState(false)
  const pos = usePosition(geo)
  const addresses = useAddressSearch(searchTerm)
  const { label } = useSymfonyContext()

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (geo && pos && !pos.error && pos.latitude && pos.longitude) {
      setCoordinates([pos.latitude, pos.longitude])
      setLoading(true)
      setGeo(false)
    }
  }, [geo, pos.latitude, pos.longitude])

  return (
    <>
      <label id="combosearch_label" class="sr-only">
        {label}
      </label>
      <Combobox
        style={{ display: 'inline-block', width: '75%' }}
        aria-labelledby="combosearch_label"
        onSelect={value => {
          setLoading(true)
          const coords = addresses.find(a => getLabel(a.properties) === value)
            .geometry.coordinates
          coords.reverse()
          setCoordinates(coords)
        }}
        openOnFocus
      >
        <ComboboxInput
          selectOnClick
          autocomplete={false}
          placeholder="Adresse..."
          className="form-control ezgeodatagouv__search--input"
          onChange={handleSearchTermChange}
          disabled={loading}
        />
        {addresses && (
          <ComboboxPopover className="shadow-popup">
            {addresses.length > 0 ? (
              <ComboboxList>
                {addresses.map(({ properties: { id, ...properties } }) => (
                  <ComboboxOption key={id} value={getLabel(properties)}>
                    {getLabel(properties)}
                  </ComboboxOption>
                ))}
              </ComboboxList>
            ) : (
              <span style={{ display: 'block', margin: 8 }}>
                Entrez une adresse pour afficher la liste des résultats.
              </span>
            )}
          </ComboboxPopover>
        )}
      </Combobox>

      <button
        title={
          pos && pos.error
            ? 'Erreur de géolocalisation'
            : pos && pos.timestamp
            ? 'Géolocalisation active'
            : 'Activer la géolocalisation'
        }
        className="button btn bnt-submit"
        type="button"
        style={{
          padding: '5px 5px 0px',
          margin: '0 0 0 10px',
          verticalAlign: 'top',
        }}
        onClick={() => setGeo(true)}
        disabled={pos && pos.error}
      >
        <Target
          className="true"
          style={{
            display: 'inline-block',
            width: '1.5em',
            height: '1.5em',
            color:
              pos && pos.error
                ? '#dc3545'
                : pos && pos.timestamp
                ? '#28a745'
                : 'white',
          }}
        />
      </button>

      {loading && (
        <div className="ezgeodatagouv__result--status">
          Recherche en cours...
        </div>
      )}
      <ResultMap
        key={coordinates}
        coordinates={coordinates}
        disableLoading={() => setLoading(false)}
      />
    </>
  )
}

export default GeoFinder
