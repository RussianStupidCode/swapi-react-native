import axios from "axios";

import { BASE_API_PATH } from "./config";

interface ApiListResult<T> {
  count: number;
  next: string | null;
  previos: string | null;
  results: T[];
}

const apiClient = axios.create({ baseURL: BASE_API_PATH });

export { apiClient };
export type { ApiListResult };
