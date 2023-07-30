import { apiClient, ApiListResult } from "@/shared/api";
import { createUseInfiniteApiResponse } from "@/shared/lib";

type Person = {
  name: string;
  height: TemplateStringsArray;
  mass: string;
  hair_color: string;
  birth_year: string;
  gender: string;
  url: string;
};

const BASE_URL = "/people";

type PersonListResponse = ApiListResult<Person>;

const getPersons = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<PersonListResponse> => {
  const url = `${BASE_URL}/?page=${pageParam}`;

  const response = await apiClient.get(url);

  return response.data;
};

const getPersonById = async ({ id }: { id: number }): Promise<Person> => {
  const url = `${BASE_URL}/${id}`;

  const response = await apiClient.get(url);

  return response.data;
};

const useInfinitePersons = createUseInfiniteApiResponse("people", getPersons);

export { getPersonById, getPersons, useInfinitePersons };
export type { Person };
