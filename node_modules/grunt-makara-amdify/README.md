grunt-makara-amdify
=======================

By default this will extract content bundles from your application's `locales/{country}/{language}/` directories and build `.build/{locale}/_languagepack.js` files, which can be loaded on a page and `require()`ed by AMD Javascript.

The task name it exports is `makara-amdify`. To use it, in your `Gruntfile.js`, add:

```
grunt.loadNpmTasks('grunt-makara-amdify');
grunt.registerTask('i18n', [ 'makara-amdify' ]);
```

This forms the basis of a AMD application's localization, allowing dust templates to be localized using `dust-usecontent-helper` and either `dust-message-helper` or `dust-intl`, or with similar techniques for React using `react-intl` or handlebars with `handlebars-intl`
