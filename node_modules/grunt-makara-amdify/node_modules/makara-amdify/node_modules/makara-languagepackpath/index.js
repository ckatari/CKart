"use strict";

var bcp47 = require('bcp47');

module.exports = {
    languagePackPath: languagePackPath,
    middleware: function(options) {
        var nosuffix = options && options.nosuffix;
        return function (req, res, next) {
            if (!res.locals.makara) res.locals.makara = {};
            res.locals.makara.languagePackPath = languagePackPath(res.locals.locale, nosuffix);
            next();
        };
    }

};

function languagePackPath(locale, nosuffix) {
    if (!locale) throw new Error("Must specify a locale");
    // Handle PayPal-style input
    if (locale.language && locale.country) locale = locale.language + '-' + locale.country;

    // Handle strings
    if (typeof locale == 'string') locale = bcp47.parse(locale);

    if (!locale || !locale.langtag || !locale.langtag.language || !locale.langtag.language.language || !locale.langtag.region) throw new Error('Invalid locale');

    return locale.langtag.language.language + '-' + locale.langtag.region +
        '/_languagepack' + (nosuffix ? '' : '.js');
}
