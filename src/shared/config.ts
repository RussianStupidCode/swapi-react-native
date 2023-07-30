export const TAB_PAGE_NAMES = {
  home: "HOME",
} as const;

export const STACK_PAGE_NAMES = {
  home: {
    main: "MAIN",
    films: {
      main: "FILMS_MAIN",
      list: "FILM_LIST",
      detail: "FILM_DETAIL",
    },
  },
} as const;

export const BASE_API_PATH = "https://swapi.dev/api";
