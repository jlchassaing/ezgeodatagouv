import L from 'leaflet'

const defaultProps = {
  iconSize: 30,
  iconAnchor: [15, 30],
  popupAnchor: [0, -25],
  tooltipAnchor: [0, -25],
}

export const defaultMarker = new L.divIcon({
  ...defaultProps,
  className: 'ezgeodatagouv__marker',
})

export const homeMarker = new L.divIcon({
  ...defaultProps,
  className: 'ezgeodatagouv__marker--start',
})

export const selectedMarker = new L.divIcon({
  ...defaultProps,
  className: 'ezgeodatagouv__marker--selected',
})
