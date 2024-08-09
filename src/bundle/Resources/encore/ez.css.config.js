const path = require('path')

const deps = {
  leaflet: path.resolve(
    './vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.css'
  ),
  bundle: path.resolve(__dirname, '../public/css/style.css'),
}

module.exports = Encore => {
  Encore.addStyleEntry(
    'ezgeodatagouv-full-css',
    Object.values(deps)
  ).addStyleEntry('ezgeodatagouv-no-leaflet-css', [deps.bundle])
}
