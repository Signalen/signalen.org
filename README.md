# Signalen website

A website to get potential new users of Signalen to get to know it and get them started.

This site is a collaborative project by the Signalen community and is meant to be [easy to contribute to](CONTRIBUTING.md).

## Building, testing and deploying

This site is a GitHub pages site that is built using [Gatsby](https://www.gatsbyjs.org/). You can install using Ruby with the `bundle install` command. After this you can use the `./script/serve.sh` to start a local webserver and build/update the site.

Testing is done by Travis. Tests use `./script/test.sh` and are for the completion of the build as well as linting the Markdown file with the default markdownlint set (except for line-length) and the validity of links.

The `master` branch of this repository is automatically deployed using GitHub pages.

## License

Copyright © the Signalen contributors.

Licensed under [EUPL](LICENSE.md).
