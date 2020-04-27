import { divIcon } from 'leaflet'

const defaultProps = {
  iconSize: 30,
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
  tooltipAnchor: [0, -25],
}

export const defaultMarker = new divIcon({
  ...defaultProps,
  className: 'ezgeodatagouv__marker',
})

export const homeMarker = new divIcon({
  ...defaultProps,
  className: 'ezgeodatagouv__marker--start',
})

export const selectedMarker = new divIcon({
  ...defaultProps,
  className: 'ezgeodatagouv__marker--selected',
})
