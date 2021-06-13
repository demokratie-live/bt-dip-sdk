import { DipApi, Configuration } from "../index";

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
