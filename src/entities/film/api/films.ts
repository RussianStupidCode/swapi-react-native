import { apiClient, ApiListResult } from "@/shared/api";
import { createUseInfiniteApiResponse } from "@/shared/lib";

type Film = {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  url: string;
  opening_crawl: string;
};

const BASE_URL = "/films";

type FilmListResponse = ApiListResult<Film>;

const getFilms = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<FilmListResponse> => {
  const url = `${BASE_URL}/?page=${pageParam}`;

  const response = await apiClient.get(url);

  return response.data;
};

const getFilmById = async ({ id }: { id: number }): Promise<Film> => {
  const url = `${BASE_URL}/${id}`;

  const response = await apiClient.get(url);

  return response.data;
};

const useInfiniteFilms = createUseInfiniteApiResponse("films", getFilms);

export { getFilmById, getFilms, useInfiniteFilms };
export type { Film };
