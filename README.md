# RentPrep API

[RentPrep](https://www.rentprep.com/) API for running background and other checks on applying renters.

This module lets you create and query applications; along with add and remove applicants.

## Install

```js
$ npm i -s git+https://git@github.com:Villa-Rentals/rentprep-sdk.git

```

## Usage

#### Configure Strategy

The RentPrep API authenticates using the api key. This api key can be requested by contacting RentPrep directly. The library needs to be initialized with the api key and a flag determining production. Example:

```js
new RentPrep({
  production: false,
  key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
});
```

#### Making Requests

See the [documentation](https://villa-rentals.github.io/rentprep-sdk/) for more information about the SDK.

## Tests

The api key is required for the tests to pass. This can be obtained by contacting RentPrep directly. Once these key has been acquired, create a .env file from the [.env.example](.env.example) file and provide the key. This will be used to authenticate your requests.

```bash
$ npm install --dev
$ npm test
```
## License

[The MIT License](http://opensource.org/licenses/MIT)
