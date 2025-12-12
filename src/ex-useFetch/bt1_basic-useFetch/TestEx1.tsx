// Import các components cần thiết từ antd
import {
  Card,
  List,
  Spin,
  Alert,
  Descriptions,
  Tag,
  Space,
  Typography,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  ShopOutlined,
  CompassOutlined,
} from "@ant-design/icons";

// Giả định useFetch nằm trong dự án của bạn
import useFetch from "./useFetch";

const { Title, Text } = Typography;

// Giữ nguyên interface User đã định nghĩa
interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const TestEx1 = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  // 1. Sử dụng component Spin của Antd cho trạng thái Loading
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" tip="Đang tải dữ liệu người dùng..." />
      </div>
    );
  }

  // 2. Sử dụng component Alert của Antd cho trạng thái Error
  if (error) {
    return (
      <Alert
        message="Lỗi tải dữ liệu"
        description={`Đã xảy ra lỗi: ${error}`}
        type="error"
        showIcon
        style={{ margin: "20px" }}
      />
    );
  }

  // 3. Sử dụng component List để hiển thị danh sách người dùng
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        <UserOutlined /> Danh Sách Người Dùng - Basic useFetch Hook
      </Title>

      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }}
        dataSource={data || []}
        renderItem={(user) => (
          <List.Item>
            {/* 4. Sử dụng component Card để nhóm thông tin của từng người dùng */}
            <Card
              title={
                <Space>
                  <UserOutlined />
                  <Title level={4} style={{ margin: 0 }}>
                    {user.name}
                  </Title>
                  <Tag color="blue">ID: {user.id}</Tag>
                </Space>
              }
              hoverable
              actions={[
                <a
                  key="website"
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobalOutlined /> Website
                </a>,
                <a key="phone" href={`tel:${user.phone}`}>
                  <PhoneOutlined /> Gọi
                </a>,
                <a key="email" href={`mailto:${user.email}`}>
                  <MailOutlined /> Email
                </a>,
              ]}
            >
              {/* 5. Sử dụng component Descriptions để hiển thị chi tiết các trường */}
              <Descriptions
                column={1}
                bordered
                size="small"
                title={
                  <Title level={5}>
                    <ShopOutlined /> Thông tin Công ty
                  </Title>
                }
              >
                <Descriptions.Item label="Tên công ty">
                  <Text strong>{user.company.name}</Text>
                </Descriptions.Item>
                <Descriptions.Item label="Slogan">
                  <Text italic>{user.company.catchPhrase}</Text>
                </Descriptions.Item>
                <Descriptions.Item label="Chiến lược">
                  {user.company.bs}
                </Descriptions.Item>
              </Descriptions>

              <Descriptions
                column={1}
                bordered
                size="small"
                style={{ marginTop: "15px" }}
                title={
                  <Title level={5}>
                    <EnvironmentOutlined /> Địa chỉ
                  </Title>
                }
              >
                <Descriptions.Item label="Phố">
                  {user.address.street} - {user.address.suite}
                </Descriptions.Item>
                <Descriptions.Item label="Thành phố">
                  {user.address.city}
                </Descriptions.Item>
                <Descriptions.Item label="Mã Zip">
                  {user.address.zipcode}
                </Descriptions.Item>
              </Descriptions>

              <Descriptions
                column={1}
                bordered
                size="small"
                style={{ marginTop: "15px" }}
                title={
                  <Title level={5}>
                    <CompassOutlined /> Vị trí (Geo)
                  </Title>
                }
              >
                <Descriptions.Item label="Lat/Lng">
                  <Text code>{user.address.geo.lat}</Text> /{" "}
                  <Text code>{user.address.geo.lng}</Text>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TestEx1;
