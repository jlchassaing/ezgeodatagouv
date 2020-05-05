import React from 'react'
import ReactDOM from 'react-dom'
import App from './geo-finder'

const root = document.getElementById('root_geo_finder')
const props = {
  siteaccess: root.getAttribute('data-siteaccess'),
  maxDistance: root.getAttribute('data-distance'),
  contentType: root.getAttribute('data-contenttype'),
}

ReactDOM.render(<App {...props} />, document.getElementById('root_geo_finder'))
