import { DipApi, Configuration } from "../index";
import { VorgangResponse } from "../__generated";

const config = new Configuration({
  apiKey: `ApiKey ${process.env.API_KEY}`,
});

const api = new DipApi(config);

let cursor: any = undefined; // Issue: Why this should be any? If it's of type "string | undefined" response type is any. :'(

(async () => {
  let hasNext: boolean = true;
  let counter = 0;
  while (hasNext) {
    const { data } = await api.getPersonen({
      cursor,
    });
    hasNext = cursor !== data.cursor;
    cursor = data.cursor;
    counter += data.documents?.length ?? 0;
    console.log(data.documents?.[0].vorname)
    console.log(
      `-${data.cursor}- ${counter}/${(data as VorgangResponse).numFound}`
    );
  }
})();
