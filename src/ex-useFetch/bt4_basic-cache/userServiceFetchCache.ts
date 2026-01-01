import type { User } from "../bt2_refetch_dependency-array/TestEx2";
import { API_ENDPOINT } from "../bt2_refetch_dependency-array/TestEx2";

export type RequestFn<T> = (
  url: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  body?: unknown
) => Promise<T | null>;

export const userServiceFetchCache = {
  getUsers(request: RequestFn<User[]>) {
    return request(API_ENDPOINT, "GET");
  },

  createUser(request: RequestFn<User>, data: Pick<User, "name" | "age">) {
    return request(API_ENDPOINT, "POST", data);
  },

  updateUser(request: RequestFn<User>, id: string, data: Partial<User>) {
    return request(`${API_ENDPOINT}/${id}`, "PUT", data);
  },

  deleteUser(request: RequestFn<void>, id: string) {
    return request(`${API_ENDPOINT}/${id}`, "DELETE");
  },
};
