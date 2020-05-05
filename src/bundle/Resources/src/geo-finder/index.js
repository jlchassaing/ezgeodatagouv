import React, { useEffect, useState, useRef } from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  ScaleControl,
  Tooltip,
} from 'react-leaflet'
import Control from '@skyeer/react-leaflet-custom-control'
import useAddressSearch from './use-address-search'
import useLocationSearch from './use-location-search'
import ResultList from './result-list'
import {
  homeMarker,
  defaultMarker,
  selectedMarker,
} from '../utils/leaflet-icons'

const GeoFinder = ({ siteaccess, maxDistance, contentType }) => {
  const ref = useRef()
  const [coordinates, setCoordinates] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentIndex, setIndex] = useState(null)
  const addresses = useAddressSearch(searchTerm)
  const result = useLocationSearch(
    coordinates,
    siteaccess,
    contentType,
    maxDistance
  )

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (currentIndex !== null) {
      ref.current.leafletElement.flyTo(
        [result[currentIndex].loc.latitude, result[currentIndex].loc.longitude],
        15
      )
    }
  }, [currentIndex, result])

  return (
    <>
      {result.length > 0 && (
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'block' }}>
            <ResultList
              list={result}
              currentIndex={currentIndex}
              changeIndex={setIndex}
              coords={coordinates}
            />
          </div>
          <div style={{ maxWidth: 400 }}>
            <Map
              ref={ref}
              zoom={15}
              bounds={[
                coordinates,
                ...result.reduce(
                  (acc, { loc: { latitude, longitude } }) => [
                    ...acc,
                    [latitude, longitude],
                  ],
                  []
                ),
              ]}
              boundsOptions={{ padding: [30, 30] }}
              useFlyTo
              style={{ width: 300, height: 300 }}
            >
              <Control
                position="topleft"
                className="leaflet-bar ezgeodatagouv__control--reset"
              >
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    setIndex(null)
                    ref.current.leafletElement.flyToBounds(
                      ref.current.leafletElement.getBounds(),
                      { maxZoom: 15 }
                    )
                  }}
                >
                  <svg viewBox="0 0 32 32">
                    <path d="M32 0h-13l5 5-6 6 3 3 6-6 5 5z"></path>
                    <path d="M32 32v-13l-5 5-6-6-3 3 6 6-5 5z"></path>
                    <path d="M0 32h13l-5-5 6-6-3-3-6 6-5-5z"></path>
                    <path d="M0 0v13l5-5 6 6 3-3-6-6 5-5z"></path>
                  </svg>
                </a>
              </Control>
              <ScaleControl imperial={false} />
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                zIndexOffset={1000}
                position={coordinates}
                icon={homeMarker}
              >
                <Tooltip>Search point</Tooltip>
              </Marker>
              {result.map(
                ({ name, loc: { latitude, longitude, address } }, index) => (
                  <Marker
                    icon={
                      index === currentIndex ? selectedMarker : defaultMarker
                    }
                    position={[latitude, longitude]}
                    onClick={() => setIndex(index)}
                  >
                    <Popup autoClose>{name}</Popup>
                  </Marker>
                )
              )}
            </Map>
          </div>
        </div>
      )}
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
    </>
  )
}

export default GeoFinder
