import { useInfiniteQuery } from "react-query";

import { ApiListResult } from "@/shared/api";

const createUseInfiniteApiResponse = <T>(
  key: string,
  fn: (arg: { pageParam?: number }) => Promise<ApiListResult<T>>,
) => {
  const getNextPageParam = (lastPage: ApiListResult<T>) => {
    if (lastPage.next !== null) {
      return lastPage.next;
    }

    return undefined;
  };

  return () => useInfiniteQuery(key, fn, { getNextPageParam });
};

export { createUseInfiniteApiResponse };
