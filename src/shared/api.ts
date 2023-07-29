import axios from "axios";

import { BASE_API_PATH } from "./config";

const apiClient = axios.create({ baseURL: BASE_API_PATH });

export { apiClient };
