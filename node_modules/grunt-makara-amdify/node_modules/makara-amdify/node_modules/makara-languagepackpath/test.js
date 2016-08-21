"use strict";

var test = require('tape');

var mlp = require('./');

test('languge pack path', function(t) {
    t.equal(mlp.languagePackPath({
        country: "XC",
        language: "en"
    }), 'en-XC/_languagepack.js');
    t.equal(mlp.languagePackPath('en-XC'), 'en-XC/_languagepack.js');
    t.equal(mlp.languagePackPath({
        langtag: {
            language: {
                language: 'en',
                extlang: []
            },
            script: null,
            region: 'XC',
            variant: [],
            extension: [],
            privateuse: []
        },
        privateuse: [],
        grandfathered: {
            irregular: null,
            regular: null
        }
    }), 'en-XC/_languagepack.js');
    t.equal(mlp.languagePackPath('en-XC', true), 'en-XC/_languagepack');
    t.end();
});
