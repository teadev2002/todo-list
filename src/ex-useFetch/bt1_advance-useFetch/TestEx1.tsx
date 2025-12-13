import {
  Card,
  Row,
  Col,
  Spin,
  Alert,
  Typography,
  Flex,
  Tag,
  Avatar,
  message,
  Popconfirm,
} from "antd";
import {
  UserOutlined,
  IdcardOutlined,
  CalendarOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import { userApi } from "./userApi";
import type { User } from "./userType";
import { Button } from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import UserModal from "./userModal";
const { Title, Text } = Typography;

const TestEx1 = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await userApi.deleteUser(id);
      message.success("Đã xóa nhân sự thành công");
      fetchData();
    } catch (err) {
      // Gộp lỗi vào chung một chuỗi
      const errorDetail =
        err instanceof Error ? err.message : "Lỗi không xác định";
      message.error(`Không thể xóa nhân sự này. Chi tiết: ${errorDetail}`);
    }
  };

  // Mở modal để thêm mới
  const showCreateModal = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };
  // Mở modal để edit
  const showEditModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const fetchData = useCallback(async () => {
    try {
      // Không set loading = true ở đây để tránh hiện tượng "nháy" màn hình khi update
      const res = await userApi.getUsers();
      setData(res.data);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Lỗi tải dữ liệu");
    } finally {
      setLoading(false);
    }
  }, []);
  // Gọi lần đầu khi component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Hàm quyết định màu sắc dựa trên số tuổi
  const getAgeColor = (age: number) => {
    if (age < 18) return "orange";
    if (age <= 50) return "green";
    return "volcano";
  };

  if (loading)
    return (
      <Flex align="center" justify="center" style={{ minHeight: "200px" }}>
        <Spin tip="Đang tải..." />
      </Flex>
    );

  if (error) return <Alert message={error} type="error" showIcon />;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
      }}
    >
      <Title
        level={3}
        style={{ textAlign: "center", color: "#1a3353", marginBottom: "30px" }}
      >
        🌟 DANH SÁCH NHÂN SỰ{" "}
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showCreateModal}
        ></Button>
      </Title>
      {/* Nút thêm mới */}

      <Row gutter={[20, 20]}>
        {data.map((user) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              size="small"
              // Tạo viền màu phía trên card để thêm điểm nhấn
              styles={{
                header: {
                  borderTop: "4px solid #1890ff",
                  background: "#fafafa",
                },
              }}
              title={
                <Flex align="center" gap="small">
                  <Avatar
                    icon={<UserOutlined />}
                    style={{ backgroundColor: "#87d068" }}
                  />
                  <Text strong>{user.name}</Text>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => showEditModal(user)}
                  ></Button>
                  <Popconfirm
                    key="delete"
                    title="Xóa nhân sự"
                    description={`Bạn có chắc chắn muốn xóa ${user.name}?`}
                    onConfirm={() => handleDelete(user.id)}
                    okText="Xóa"
                    cancelText="Hủy"
                    okButtonProps={{ danger: true }}
                  >
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                    ></Button>
                  </Popconfirm>
                </Flex>
              }
            >
              <Flex vertical gap="small">
                <Flex justify="space-between" align="center">
                  <Text type="secondary">
                    <IdcardOutlined /> Mã số:
                  </Text>
                  <Tag color="blue">#{user.id}</Tag>
                </Flex>

                <Flex justify="space-between" align="center">
                  <Text type="secondary">
                    <CalendarOutlined /> Tuổi:
                  </Text>
                  <Tag
                    color={getAgeColor(user.age)}
                    style={{ fontWeight: "bold" }}
                  >
                    {user.age} tuổi
                  </Tag>
                </Flex>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
      <UserModal
        open={isModalOpen}
        editingUser={selectedUser}
        onCancel={() => setIsModalOpen(false)}
        onSuccess={() => {
          // Tải lại dữ liệu sau khi thêm/sửa thành công
          setLoading(true);
          fetchData();
        }}
      />
    </div>
  );
};

export default TestEx1;
