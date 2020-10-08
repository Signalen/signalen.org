# Signalen website

A website to get potential new users of Signalen to get to know it and get them started.

This site is a collaborative project by the Signalen community and is meant to be [easy to contribute to](CONTRIBUTING.md).

## Building, testing and deploying

This site is built using [Gatsby](https://www.gatsbyjs.org/). First make sure you have [Node](https://nodejs.org/en/) installed on your machine. Then install the dependencies with the `npm install` command. After this you can use the `npm start` to start a local webserver and build/update the site.

The `master` branch of this repository is automatically deployed using Netlify.

## Localization
This site has basic multilingual support using the gatsby-plugin-i18n.
It is implemented by the guidelines written in this blogpost:
https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/

You can start your won translation by prefixing the extenstions of files which serve up pages by using the ISO countrie codes. Files which do not include such a prefix will be defaulted to the language as configured in the `gatbsy-config.js` file.

```example:
index.en.js serves the english equivalent of that page.
```

The plugin makes all the language specific files available under the site-root/<language code> so in the case of english site-root/en/.

Imports in pages need to be referenced explicitely and do not resolve automatically.
For example `import Navigation from '../components/Navigation/` will alwasy resolve to `import Navigation from '../components/Navigation/index.js`. So if you need to reference a language specific version you should indicate the filename `import Navigation from '../components/Navigation/index.en.js`.

In order to add a translation refer to all english related files and make a copy of them including the new language code. Check the `import` statements in the page to check wether they point to the correct translated version of that file.

More information about the configuration and implementation can be found here:
https://www.gatsbyjs.com/blog/2020-02-19-how-to-build-multilingual-sites-with-gatsby/


## License

Copyright © the Signalen contributors.

Licensed under [EUPLv1.2](LICENSE.md).
