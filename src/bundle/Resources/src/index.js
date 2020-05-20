import React from 'react'
import ReactDOM from 'react-dom'

import { SymfonyContextProvider } from './context/symfony'
import App from './app'

class GeoFinderElement extends HTMLElement {
  connectedCallback() {
    const props = {
      siteaccess: this.dataset.siteaccess,
      maxDistance: parseInt(this.dataset.distance, 10),
      contentType: this.dataset.contenttype,
      width: this.dataset.width ?? this.offsetWidth,
      label: this.dataset.label ?? 'type text to search',
    }

    ReactDOM.render(
      <SymfonyContextProvider value={props}>
        <App />
      </SymfonyContextProvider>,
      this
    )
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this)
  }
}

customElements.define('geo-finder', GeoFinderElement)
