# USD to BRL Currency Converter

## Description
This app keeps track of the conversion rate between the United States Dollar(USD) and the Brazilian Real (BRL).

| Contents                                           |
| -------------------------------------------------- |
| I. [Description](#description)                     |
| II. [Usage](#usage)                                |
| III. [Pre-Requisites](#pre-requisites)             |
| IV. [Installation](#installation)                  |
| V. [Configure Environment](#configure-environment) |
| VI. [Development](#development)                    |
| VII. [Test](#test)                                 |
| VIII. [Design](#design)                            |
| IX. [API](#api)                                    |
| X. [Additional Notes](#additional-notes)           |
| XI. [Acknowledgements](#acknowledgements)          |


## Usage

### Pre-Requisites
This app was built using next.js. It requires that you have Node.js installed as well as one of the various npm package manager

**System Requirements**:
- Node.js 14.6.0 or newer
- MacOS, Windows (including WSL), and Linux are supported
- Install `npm`, `yarn`, or `pnpm`

### Installation

After cloning the repo, you need to install the dependencies using a terminal.

using npm:
```bash
$ npm install
```
using yarn:
```bash
$ yarn install
```

### Configure Environment

Firstly, you need a key from RapidApi and you need to subscribe to the Currency Converter API. [Read More on their website](https://rapidapi.com/natkapral/api/currency-converter5)

It is required for you to set an environment variable based on the key RapidAPI supplied for your. An example can be found in `/.env.local.example`

```bash
RAPID_API_KEY="<YOUR RAPID API KEY>" # Replace with your key
```

Then, edit the filename for the example file from `.env.local.example1` to `.env.local`

### Development
You can run it in dev mode so next automatically updates the DOM using hot reloading. You can do this simply by running one of the following lines.

using npm:
```bash
$ npm run dev
```
using yarn:
```bash
$ yarn dev
```

Visit at [localhost:3000](http://localhost:3000)

#### Test
There are unit tests built into this suite. They aren't as robust as I'd like, but it was more important for me to demonstrate my experience through a variety of test cases rather than a large quantity.

I did my best to use diverse concepts such as: test structure, mock callbacks, api mocks, Timer mocking, React rendering, and DOM queries.

| Script        | Description
|---------------|------------------------------------------------------------------------------------------|
| test          | Runs all the test suites.                                                                |
| test:coverage | Generates coverage reports under the /coverage directory.                                |
| test:watch    | Runs Jest's 'watch' mode. Which will automatically run any tests affected by new changes.|


using npm:
```bash
$ npm run test:watch
```
using yarn:
```bash
$ yarn test:coverage
```
## Design

### API
We leverage the Next.js api route feature to create a same-origin endpoint. This same endpoint manages a history of requested conversion rates.

##### Data
In order to do this, we need to create a data model for what a report looks like.

##### Persistence
For persistence we will simply store the reports in the cookies to be passed in the browser requests.

##### Endpoint

##### **GET** `/api/latest`: Get the latest rate.
Description: Requests the latest conversion rate from the API and stores it in the historical record.

Response 200 (application/json) - Returns the latest rate and stores the history in cookies.

## Additional Notes:

There are a variety of things I wanted to do to expand on this project. Due to time constraints it's not possible at the time of this writing.

- Creating more parameters around jest testing. Such as coverageThresholds and global mocks.
- Add a way to choose a frequency at which the rate updates
- Add many more unit tests. I believe every individual component should have some kind of test suite that covers their props. As well as creating tests for the utility functions.
- Add an e2e test to validate the entire user experience

## Acknowledgements

This is a [Next.js](https://nextjs.org/) project bootstrapped with [@mahn00b/next-typescript-app](https://github.com/mahn00b/next-typescript-app).

This application is powered by the [Currency Converter API](https://rapidapi.com/natkapral/api/currency-converter5p).
