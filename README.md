🚧 Still under Constructionn 🚧

# 🏛 Dokumentations- und Informationssystems für Parlamentsmaterialien (DIP) – SDK

TypeScript SDK for the bundestag dip rest api: https://dip.bundestag.de/über-dip/hilfe/api

## Docs

#### TypeScript Client

https://demokratie-live.github.io/bt-dip-sdk/classes/dipapi.html

#### Swagger

https://app.swaggerhub.com/apis-docs/DEMOCRACY/BundestagDIP/0.1

## Install

```
yarn add @democracy-deutschland/bt-dip-sdk
```

## Prerequirements

### ApiKey

You can get an apiKey from https://dip.bundestag.de/über-dip/hilfe/api

## Usage

```ts
import { DipApi, Configuration } from "@democracy-deutschland/bt-dip-sdk";

const config = new Configuration({
  apiKey: "ApiKey #YOUR_API_KEY#", // Replace #YOUR_API_KEY# with your api key
});

const api = new DipApi(config);

api
  .getVorgaenge({
    fDatumStart: "2020-06-01",
    fDatumEnd: "2020-06-20",
  })
  .then(({ data }) => console.log(data))
  .catch(console.error);
```

## Contribute

```sh
yarn
# Edit swagger.yml
yarn gen
```
