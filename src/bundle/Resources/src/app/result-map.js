import React, { useEffect, useState, useRef } from 'react'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  ScaleControl,
  Tooltip,
} from 'react-leaflet'
import Control from '@skyeer/react-leaflet-custom-control'
import { useSymfonyContext } from '../context/symfony'

import {
  homeMarker,
  defaultMarker,
  selectedMarker,
} from '../utils/leaflet-icons'
import useLocationSearch from '../hooks/use-location-search'
import ResultList from './result-list'

const ResultMap = ({ coordinates, disableLoading }) => {
  const ref = useRef()
  const [currentIndex, setIndex] = useState(null)
  const [result, isFresh] = useLocationSearch(coordinates)
  const { mapWidth } = useSymfonyContext()

  useEffect(() => {
    if (currentIndex !== null) {
      ref.current.leafletElement.flyTo(
        [result[currentIndex].loc.latitude, result[currentIndex].loc.longitude],
        15
      )
    }
    result && isFresh && disableLoading()
  }, [currentIndex, result, isFresh])

  return result.length > 0 ? (
    <div style={{ display: 'flex', flexFlow: 'column', marginTop: '10px' }}>
      <div style={{ display: 'block' }}>
        <ResultList
          list={result}
          currentIndex={currentIndex}
          changeIndex={setIndex}
          coords={coordinates}
        />
      </div>
      <div style={{ maxWidth: mapWidth, overflow: 'hidden' }}>
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
          style={{ width: mapWidth, height: 300, zIndex: 0 }}
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

          <Marker zIndexOffset={1000} position={coordinates} icon={homeMarker}>
            <Tooltip>Search point</Tooltip>
          </Marker>
          {result.map(({ name, loc: { latitude, longitude } }, index) => (
            <Marker
              icon={index === currentIndex ? selectedMarker : defaultMarker}
              position={[latitude, longitude]}
              onClick={() => setIndex(index)}
            >
              <Popup autoClose>{name}</Popup>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  ) : (
    isFresh && (
      <div className="ezgeodatagouv__result--status">Aucun résultat.</div>
    )
  )
}

export default ResultMap
