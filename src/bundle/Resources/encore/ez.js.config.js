const path = require('path')

const deps = {
  bundle: path.resolve(__dirname, '../public/js/geo-finder.js'),
}

module.exports = Encore => {
  Encore.addEntry(
    'ezgeodatagouv-full-js',
    Object.values(deps)
  ).addEntry('ezgeodatagouv-no-deps-js', [deps.bundle])
}
