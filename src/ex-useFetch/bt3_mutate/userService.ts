import type { User } from "../bt2_refetch_dependency-array/TestEx2";
import { API_ENDPOINT } from "../bt2_refetch_dependency-array/TestEx2";

/**
 * Service xử lý CRUD User
 * KHÔNG chứa state, chỉ gọi API
 */
type RequestFn<T> = (
  url: string,
  method?: "GET" | "POST" | "PUT" | "DELETE",
  body?: unknown
) => Promise<T | null>;

export const userService = {
  getUsers(request: RequestFn<User[]>) {
    return request(API_ENDPOINT, "GET");
  },

  createUser(
    request: RequestFn<User>,
    data: Pick<User, "name" | "age">
  ) {
    return request(API_ENDPOINT, "POST", data);
  },

  deleteUser(
    request: RequestFn<User>,
    id: string
  ) {
    return request(`${API_ENDPOINT}/${id}`, "DELETE");
  },

  updateUser(
    request: RequestFn<User>,
    id: string,
    data: Partial<User>
  ) {
    return request(`${API_ENDPOINT}/${id}`, "PUT", data);
  },
};