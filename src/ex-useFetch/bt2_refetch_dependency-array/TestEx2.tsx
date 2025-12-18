import { message } from "antd";
import { useFetchV2 } from "./useFetchRefetch"; // Giả sử hook useFetchV2 nằm trong file cùng cấp
import axios from "axios";
import Loader from "./Loader";

// 1. Cập nhật Interface cho dữ liệu thực tế: name, age, id
interface User {
  id: string; // ID từ MockAPI thường là chuỗi
  name: string;
  age: number;
  // Các trường khác nếu MockAPI trả về
}

const API_ENDPOINT = "https://693c5aa0b762a4f15c404a15.mockapi.io/user";

const TestEx2 = () => {
  // 2. Sử dụng hook useFetchV2 với URL và kiểu dữ liệu mới
  const {
    data: users, // Danh sách User
    loading,
    error,
    refetch,
  } = useFetchV2<User[]>(API_ENDPOINT); // Cập nhật URL

  // Dữ liệu mới để POST
  const newUserData = {
    name: "test user",
    age: 41,
    // ID thường được MockAPI tự tạo, không cần POST
  };

  const handleSimulatedPostAndRefetch = async () => {
    message.info("Đang thực hiện thao tác POST dữ liệu thật...");

    // *** Bước thực hiện POST thật ***
    try {
      const response = await axios.post(API_ENDPOINT, newUserData);
      console.log("Dữ liệu POST thành công:", response.data);

      message.success(
        `POST thành công (ID: ${response.data.id}). Bắt đầu tải lại danh sách...`
      );

      // *** Bước kích hoạt Refetch ***
      refetch(); // <--- Kích hoạt tải lại dữ liệu GET để thấy mục mới

      // Tắt message sau 3s (tùy chọn)
      setTimeout(() => {
        message.success(
          "Tải lại danh sách hoàn tất! Dữ liệu mới đã được thêm."
        );
      }, 5000); // Đợi 0.5s để refetch hoàn tất
    } catch (err: unknown) {
      console.error("Lỗi khi POST:", err);
      let errorMessage = "POST thất bại.";
      if (axios.isAxiosError(err) && err.message) {
        errorMessage += ` Chi tiết: ${err.message}`;
      }
      message.error(errorMessage);
    }
  };

  // 3. Xử lý trạng thái Loading và Error
  if (loading) {
    return (
      <div
        style={{
          color: "blue",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        <Loader />
      </div>
    );
  }

  // 4. Hiển thị dữ liệu và nút Refetch
  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 Test Hook useFetchV2 với MockAPI</h2>

      {/* Nút kiểm tra chức năng refetch */}
      <button
        onClick={handleSimulatedPostAndRefetch}
        style={{
          padding: "10px 15px",
          margin: "10px 0",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        POST Dữ liệu Mới và Refetch
      </button>

      <h3>Danh sách Users Hiện tại ({users?.length} người):</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users?.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "6px 0",
              backgroundColor: "#f9f9f9",
              borderRadius: "4px",
            }}
          >
            <strong>ID: {user.id}</strong> | Name: {user.name} | Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestEx2;
