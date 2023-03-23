import {
  AktivittenApi,
  AktivittenApiGetAktivitaetListRequest,
  Configuration,
} from "../index";
import rateLimitedInstance from "./axios";

// Create a new Configuration instance with the provided API key
const config = new Configuration({
  apiKey: `ApiKey ${process.env.API_KEY}`,
});

// Create a new AktivittenApi instance using the provided configuration
// and rateLimitedInstance (which limits the requests to one every 3 seconds)
const api = new AktivittenApi(config, undefined, rateLimitedInstance);

// Define an asynchronous function to fetch activity lists
(async () => {
  // Initialize the cursor with the appropriate type
  let cursor: AktivittenApiGetAktivitaetListRequest["cursor"] = undefined;
  let hasNext: boolean = true;
  let counter = 0;
  
    // While there are more activities to fetch
  while (hasNext) {
    // Request the activity list using the current cursor
    const { data } = await api.getAktivitaetList({
      cursor,
    });
    hasNext = cursor !== data.cursor;
    cursor = data.cursor;
    counter += data.documents?.length ?? 0;

    console.log(`-${data.cursor}- ${counter}/${data.numFound}`);
  }
})();
