import { Button, Card, Typography, Space, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, googleProvider } from "./config.ts";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const LoginFirebase = () => {
  const navigate = useNavigate();

  async function signInGoogle() {
    await signInWithPopup(auth, googleProvider);
    message.success("Đăng nhập thành công!");
    message.info(`${auth.currentUser?.displayName}, chào mừng bạn!`);
    navigate("/home");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa, #e4e8eb)",
      }}
    >
      <Card
        style={{
          width: 360,
          borderRadius: 12,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <div style={{ textAlign: "center" }}>
            <Title level={3}>Đăng nhập</Title>
            <Text type="secondary">Đăng nhập bằng tài khoản Google</Text>
          </div>

          <Button
            icon={<GoogleOutlined />}
            size="large"
            block
            style={{
              height: 48,
              fontWeight: 500,
            }}
            onClick={() => {
              signInGoogle();
            }}
          >
            Đăng nhập với Google
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default LoginFirebase;
