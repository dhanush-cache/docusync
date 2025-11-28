<p align="center">
  <span style="font-size: 29px; font-weight: bold;">DocuSync</span>
</p>
<p align="center">
  <i>A fast, collaborative knowledge platform for modern teams — built with React and Node.js.<br/></i>
  <br/>
  <img width="1640" alt="screenshot" src="https://user-images.githubusercontent.com/380914/110356468-26374600-7fef-11eb-9f6a-f2cc2c8c6590.png">
</p>

<p align="center">
  <a href="http://www.typescriptlang.org" rel="nofollow"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg" alt="TypeScript"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier"></a>
  <a href="https://github.com/styled-components/styled-components"><img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg" alt="Styled Components"></a>
  <a href="#" alt="Localized"><img src="https://badges.crowdin.net/outline/localized.svg"></a>
</p>

This repository contains the complete source code for **Docusync**, a collaborative documentation and knowledge-sharing platform. If you simply want to use the product.

If you want to self-host Docusync or contribute to the platform, you’re in the right place.

---

# Installation

To run your own instance of Docusync in a production environment, please refer to the hosting documentation.

If you find gaps or improvements for the documentation, please start a thread in **GitHub Discussions**.

---

# Development

If you’re interested in contributing fixes, enhancements, or new features, see our guide for local development setup.

---

## Contributing

Docusync is maintained by a small, focused team — and we’d love your help!

Before opening a pull request, please start a discussion or comment on an existing issue on **[GitHub](https://github.com/docusync/docusync/issues)**. Early alignment on approach dramatically increases the chances of a successful merge.

Ways to contribute:

* Help with **translations**
* Explore issues tagged **good first issue**
* Improve frontend or backend performance
* Enhance developer experience & documentation
* Fix bugs and open issues

We look forward to collaborating with you!

---

## Architecture

To understand the application’s structure and internal design, start with the **[Architecture Overview](docs/ARCHITECTURE.md)**.

---

## Debugging

During development, Docusync prints categorized logs to the console. In production, structured JSON logs are emitted for ingestion into log pipelines.

HTTP logging is off by default, but you can enable it using:

```
DEBUG=http
```

You can also enable full or category-specific logging:

```
DEBUG=*
DEBUG=database
LOG_LEVEL=debug
LOG_LEVEL=silly
```

---

## Tests

Critical pieces of Docusync are covered by tests. While not striving for full unit coverage, all authentication and API endpoints must be thoroughly tested.

We use **Jest** for all testing.

```shell
# Run the full test suite
make test

# Backend tests in watch mode
make watch
```

If a test database has already been created, you may run tests directly with Jest:

```shell
# Backend tests
yarn test:server

# Single backend test in watch mode
yarn test path/to/file.test.ts --watch

# Frontend tests
yarn test:app
```

---

## Migrations

Docusync uses Sequelize for database migrations.

```shell
yarn db:create-migration --name my-migration
yarn db:migrate
yarn db:rollback
```

Running migrations against the test database:

```shell
yarn db:migrate --env test
```
