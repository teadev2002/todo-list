import { Routes, Route, Link } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import {
  HomeOutlined,
  ExperimentOutlined,
  UserOutlined,
  CheckSquareOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import TestEx1 from "../ex-useFetch/bt1_advance-useFetch/TestEx1";
import Practice from "../Practice";
import TodoPage from "../todo-app/components/TodoPage";
import TestEx1v1 from "../ex-useFetch/bt1_basic-useFetch/TestEx1v1";
import HomePage from "../pages/HomePage";
import TestEx1v3 from "../ex-useFetch/bt1_advance-useFetch-v3/TestEx1v3";
import TestEx2 from "../ex-useFetch/bt2_refetch_dependency-array/TestEx2";
import TestEx3 from "../ex-useFetch/bt3_mutate/TestEx3";
import TestEx4 from "../ex-useFetch/bt4_basic-cache/TestEx4";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: <Link to="/home"> </Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: <Link to="#"> </Link>,
    icon: <UsergroupAddOutlined />,
    children: [
      {
        key: "2-6",
        label: <Link to="/user/v4-cache"> List User v4 useFetch cache</Link>,
        icon: <UsergroupAddOutlined />,
      },
      {
        key: "2-5",
        label: <Link to="/user/v3-mutate"> List User v3 useFetch mutate</Link>,
        icon: <UsergroupAddOutlined />,
      },
      {
        key: "2-4",
        label: (
          <Link to="/user/v1-refetch"> List User v1 useFetch refetch</Link>
        ),
        icon: <UsergroupAddOutlined />,
      },
      {
        key: "2-1",
        label: <Link to="/user/v2"> List User v2 </Link>,
        icon: <UsergroupAddOutlined />,
      },
      {
        key: "2-2",
        label: <Link to="/user/v1">List User v1 useFetch basic</Link>,
        icon: <UsergroupAddOutlined />,
      },
      {
        key: "2-3",
        label: <Link to="/dragon-ball-characters">Dragon Ball Character </Link>,
        icon: <UsergroupAddOutlined />,
      },
    ],
  },
  {
    key: "3",
    label: <Link to="/todo"> </Link>,
    icon: <CheckSquareOutlined />,
  },
  {
    key: "4",
    label: <Link to="/practice"> </Link>,
    icon: <ExperimentOutlined />,
  },
  {
    key: "5",
    label: <Link to="/login"> </Link>,
    icon: <UserOutlined />,
  },
];

const MainLayout = () => {
  return (
    // Bọc toàn bộ ứng dụng bằng BrowserRouter

    <Layout style={{ minHeight: "100vh" }}>
      {/* Thanh Điều Hướng (Navigation Bar) */}
      <Header
        style={{ display: "flex", alignItems: "center", background: "#fff" }}
      >
        <div className="logo" /> {/* Có thể thêm logo nếu cần */}
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>

      {/* Nội dung Trang */}
      <Content style={{ padding: "0 20px" }}>
        <div
          style={{
            margin: "0",
            background: "#fff",
          }}
        >
          {/* Định nghĩa các Routes */}
          <Routes>
            <Route path="/home" element={<HomePage />} />

            <Route path="/user/v4-cache" element={<TestEx4 />} />
            <Route path="/user/v3-mutate" element={<TestEx3 />} />
            <Route path="/user/v1-refetch" element={<TestEx2 />} />
            <Route path="/user/v2" element={<TestEx1 />} />
            <Route path="/user/v1" element={<TestEx1v1 />} />
            <Route path="/dragon-ball-characters" element={<TestEx1v3 />} />
            <Route path="/todo" element={<TodoPage />} />

            <Route path="/practice" element={<Practice />} />

            <Route
              path="*"
              element={
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                  <Button type="primary" href="/home">
                    Trang chủ
                  </Button>
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
  );
};

export default MainLayout;
