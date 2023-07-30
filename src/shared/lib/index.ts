import { useInfiniteQuery } from "react-query";

import { ApiListResult } from "@/shared/api";

const extractPageNumber = (url: string) => {
  const str = url.slice(url.lastIndexOf("=") + 1);

  return Number(str);
};

const createUseInfiniteApiResponse = <T>(
  key: string,
  fn: (arg: { pageParam?: number }) => Promise<ApiListResult<T>>,
) => {
  const getNextPageParam = (lastPage: ApiListResult<T>) => {
    if (lastPage.next === null) {
      return undefined;
    }

    return extractPageNumber(lastPage.next);
  };

  return () => useInfiniteQuery(key, fn, { getNextPageParam });
};

export { createUseInfiniteApiResponse };
