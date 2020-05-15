import React from 'react'
import ReactDOM from 'react-dom'

import { SymfonyContextProvider } from './context/symfony'
import App from './app'

const root = document.getElementById('root_geo_finder')

const props = {
  siteaccess: root.getAttribute('data-siteaccess'),
  maxDistance: root.getAttribute('data-distance'),
  contentType: root.getAttribute('data-contenttype'),
  width: root.hasAttribute('data-width') ? root.getAttribute('data-width') : root.offsetWidth,
  label: root.hasAttribute('data-label') ? root.getAttribute('data-label') : 'type text to search',
}

ReactDOM.render(
  <SymfonyContextProvider value={props}>
    <App />
  </SymfonyContextProvider>,
  document.getElementById('root_geo_finder')
)
