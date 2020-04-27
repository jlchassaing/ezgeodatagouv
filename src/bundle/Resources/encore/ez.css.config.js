const path = require('path')

const deps = {
  leaflet: path.resolve(
    './vendor/ezsystems/ezplatform-admin-ui-assets/Resources/public/vendors/leaflet/dist/leaflet.css'
  ),
  bundle: path.resolve(__dirname, '../public/css/style.css'),
}

module.exports = Encore => {
  Encore.addStyleEntry(
    'ezgeodatagouv-full-css',
    Object.values(deps)
  ).addStyleEntry('ezgeodatagouv-no-leaflet-css', [deps.bundle])
}
