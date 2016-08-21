makara-amdify
=============

i18n transport for AMD modular apps served by Kraken.js

Use
---

`var ma = require('makara-amdify');`

`ma.build(projectRoot, cb)`: Builds AMD bundles defining `_languagepack` for each locale in `projectRoot/locales`

`ma.localesPath()`: returns the path relative to the `projectRoot/.build/` of the compiled assets, suitable for tacking onto the end of a CDN root or static server root for use in applications.
