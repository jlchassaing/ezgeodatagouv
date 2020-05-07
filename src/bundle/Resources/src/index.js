import React from 'react'
import ReactDOM from 'react-dom'

import { SymfonyContextProvider } from './context/symfony'
import App from './app'

const root = document.getElementById('root_geo_finder')
const props = {
  siteaccess: root.getAttribute('data-siteaccess'),
  maxDistance: root.getAttribute('data-distance'),
  contentType: root.getAttribute('data-contenttype'),
}

ReactDOM.render(
  <SymfonyContextProvider value={props}>
    <App />
  </SymfonyContextProvider>,
  document.getElementById('root_geo_finder')
)
