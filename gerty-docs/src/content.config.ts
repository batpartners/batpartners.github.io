import { defineCollection } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  // UI strings Starlight has no Korean for (the search box), in src/content/i18n/ko.json.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
