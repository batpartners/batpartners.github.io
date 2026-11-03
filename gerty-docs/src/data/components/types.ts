// Shape of a component data file (src/data/components/<component>.mjs). Names and types are written once;
// descriptions are per language and may hold inline HTML.
export type Lang = "ko" | "en";

export interface Row {
  name: string;
  type: string;
  /** Not required; shows an "옵션 / Optional" pill. Put the default value in the description. */
  optional?: boolean;
  /** Where the control sits on its tab screenshot, in % of the image height: [top, height]. */
  y?: [number, number];
  ko: string;
  en: string;
}

export interface Tab {
  label: string;
  /** Screenshot file in assets/images. */
  img: string;
  rows: Row[];
}
