export type ListItem = {
  geonameid: number;
  country: string;
  name: string;
  subcountry: string;
};

export enum StatusMessages {
  INITIAL_STATE = "",
  ERROR = "Ups! There was an error. Try again.",
  NOT_FOUND = "No data was found. Try a different search.",
  SEARCHING = "Searching...",
}
