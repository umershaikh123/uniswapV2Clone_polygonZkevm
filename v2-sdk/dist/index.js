
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uswap_sdk_v2_polygonzkevm_cardona.cjs.production.min.js')
} else {
  module.exports = require('./uswap_sdk_v2_polygonzkevm_cardona.cjs.development.js')
}
