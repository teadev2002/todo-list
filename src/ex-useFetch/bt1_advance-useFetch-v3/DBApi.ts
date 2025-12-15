import { axiosClientDB } from "./axiosClientDB";

// Định nghĩa interface cho tham số truy vấn (query params)
interface GetCharactersParams {
    page?: number;
    limit?: number;
}

export const DBApi = {
  
  // Cập nhật getCharacters để nhận params
  getCharacters(params?: GetCharactersParams) {
    // Axios có thể tự động chuyển đổi đối tượng params thành chuỗi truy vấn (query string)
    // Ví dụ: { page: 2, limit: 10 } sẽ thành "?page=2&limit=10"
    return axiosClientDB.get("/characters", { params });
  },
  
  getCharacterById(id: number | string) {
    return axiosClientDB.get(`/characters/${id}`);
  },
};