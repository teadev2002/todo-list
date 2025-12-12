import { axiosClient } from "./axiosClient";

export const userApi = {
  // GET all users
  getUsers() {
    return axiosClient.get("/user");
  },

  // GET one user
  getUser(id: number | string) {
    return axiosClient.get(`/user/${id}`);
  },

  // POST create new user
  createUser(data: string | object) {
    return axiosClient.post("/user", data);
  },

  // PUT replace entire user
  updateUser(id: number | string, data:  string | object) {
    return axiosClient.put(`/user/${id}`, data);
  },

  // PATCH update partial info
  patchUser(id: number | string, data:  string | object) {
    return axiosClient.patch(`/user/${id}`, data);
  },

  // DELETE user
  deleteUser(id: number | string) {
    return axiosClient.delete(`/user/${id}`);
  },
};
