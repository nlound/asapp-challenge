const defaultUri = "http://127.0.0.1:3030";

export const endpoint = {
  cities: (id?: number) =>
    `${defaultUri}/cities`,
  preferences: () =>
    `${defaultUri}/preferences/cities`
};
