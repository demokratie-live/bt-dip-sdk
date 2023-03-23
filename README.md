# 🏛 Dokumentations- und Informationssystems für Parlamentsmaterialien (DIP) – SDK

TypeScript SDK for the bundestag dip rest api: https://dip.bundestag.de/über-dip/hilfe/api

> :warning: **Breacking changes in v0.1.2**: This SDK is now using the official swagger file from bundestag.

## Docs

#### Swagger

https://search.dip.bundestag.de/api/v1/swagger-ui/
## Install

```
yarn add @democracy-deutschland/bt-dip-sdk
```

## Prerequirements

### ApiKey

You can get an apiKey from https://dip.bundestag.de/über-dip/hilfe/api

## Usage

```ts
import { VorgngeApi, Configuration } from "@democracy-deutschland/bt-dip-sdk";

const config = new Configuration({
  apiKey: "ApiKey #YOUR_API_KEY#", // Replace #YOUR_API_KEY# with your api key
});

const api = new VorgngeApi(config);

api
  .getVorgangList({
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
