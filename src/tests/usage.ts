import { DipApi, Configuration } from "../index";
import { VorgangResponse } from "../__generated";

const config = new Configuration({
  apiKey: `ApiKey ${process.env.API_KEY}`,
});

const api = new DipApi(config);

let cursor: string | undefined = undefined;

(async () => {
  let hasNext: boolean = true;
  let counter = 0;
  while (hasNext) {
    const { data } = (await api.getVorgaenge({
      cursor,
    })) as any;
    hasNext = cursor !== data.cursor;
    cursor = data.cursor;
    counter += data.documents.length;

    console.log(
      `-${data.cursor}- ${counter}/${(data as VorgangResponse).numFound}`
    );
  }
})();
