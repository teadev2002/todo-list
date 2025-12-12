import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  ExperimentOutlined,
  UserOutlined,
  CheckSquareOutlined,
} from "@ant-design/icons";

import TestEx1 from "./ex-useFetch/bt1_basic-useFetch/TestEx1";
import Practice from "./Practice";
import TodoPage from "./todo-app/components/TodoPage";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: <Link to="/">Trang chủ</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: <Link to="/users">Danh sách Users</Link>,
    icon: <UserOutlined />,
  },
  {
    key: "3",
    label: <Link to="/todo">Todo App</Link>,
    icon: <CheckSquareOutlined />,
  },
  {
    key: "4",
    label: <Link to="/practice">Practice</Link>,
    icon: <ExperimentOutlined />,
  },
];

const HomePage = () => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h1>Chào mừng đến với ứng dụng React của bạn!</h1>
    <p>Sử dụng thanh điều hướng phía trên để truy cập các trang.</p>
  </div>
);

function DisplayApp() {
  return (
    // Bọc toàn bộ ứng dụng bằng BrowserRouter
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Thanh Điều Hướng (Navigation Bar) */}
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="logo" /> {/* Có thể thêm logo nếu cần */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>

        {/* Nội dung Trang */}
        <Content style={{ padding: "0 48px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: "#fff",
            }}
          >
            {/* Định nghĩa các Routes */}
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/users" element={<TestEx1 />} />

              <Route path="/todo" element={<TodoPage />} />

              <Route path="/practice" element={<Practice />} />

              <Route
                path="*"
                element={
                  <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <h2>404 - Không tìm thấy trang</h2>
                  </div>
                }
              />
            </Routes>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          React App Design ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default DisplayApp;
