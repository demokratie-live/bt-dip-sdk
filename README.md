🚧 Still under Constructionn 🚧

# bt-dip-sdk

## Docs

https://demokratie-live.github.io/bt-dip-sdk/classes/dipapi.html

## Install

```
yarn add @democracy-deutschland/bt-dip-sdk
```

## Usagee

```ts
import { DipApi, Configuration } from "@democracy-deutschland/bt-dip-sdk";

const config = new Configuration({
  apiKey: "ApiKey N64VhW8.yChkBUIJeosGojQ7CSR2xwLf3Qy7Apw464",
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
