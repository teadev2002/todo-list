import { auth } from "../login/config";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>
        Welcome, <b>{auth.currentUser?.displayName} </b> đến với ứng dụng Vite +
        React + TypeScript
      </h1>
      <p>Sử dụng thanh điều hướng phía trên để truy cập các trang.</p>
    </div>
  );
};

export default HomePage;
