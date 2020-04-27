import React from 'react'
import ReactDOM from 'react-dom'
import App from './geo-finder'

const root = document.getElementById('root_geo_finder')
const props = {
  maxDistance: root.getAttribute('data_distance'),
  contentType: root.getAttribute('data_content_type'),
}

ReactDOM.render(<App {...props} />, document.getElementById('root_geo_finder'))
