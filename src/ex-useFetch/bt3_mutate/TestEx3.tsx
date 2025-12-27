import { useEffect, useState } from "react";
import type { User } from "../bt2_refetch_dependency-array/TestEx2";
import { useFetchMutate } from "./useFetchMutate";
import Loader from "../bt2_refetch_dependency-array/Loader";
import {
  Button,
  message,
  Space,
  List,
  Card,
  Typography,
  Modal,
  Form,
  Input,
  InputNumber,
} from "antd";
import { API_ENDPOINT } from "../bt2_refetch_dependency-array/TestEx2";
import CardCustom from "../../components/UI/CardCustom";

const { Text } = Typography;

const TestEx3 = () => {
  const { loading, error, request } = useFetchMutate<User[] | User>();
  const [users, setUsers] = useState<User[]>([]);

  // State cho Modal PUT
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form] = Form.useForm();

  const handleGet = async () => {
    const data = await request(API_ENDPOINT, "GET");
    if (data && Array.isArray(data)) {
      setUsers(data);
    }
  };

  useEffect(() => {
    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePost = async () => {
    const nameUser = `User_${Math.random().toString(36).substring(2, 8)}`;
    const ageUser = Math.floor(Math.random() * 100);
    const result = await request(API_ENDPOINT, "POST", {
      name: nameUser,
      age: ageUser,
    });

    if (result) {
      message.success(`Thêm ${nameUser} thành công!`);
      handleGet();
    }
  };

  const handleDeleteById = async (id: string) => {
    const result = await request(`${API_ENDPOINT}/${id}`, "DELETE");
    if (result) {
      message.error(`Đã xóa user ID: ${id}`);
      handleGet();
    }
  };

  // --- CHỨC NĂNG PUT ---
  const showEditModal = (user: User) => {
    setEditingUser(user);
    form.setFieldsValue(user); // Đổ dữ liệu cũ vào form
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      if (editingUser) {
        const result = await request(
          `${API_ENDPOINT}/${editingUser.id}`,
          "PUT",
          values
        );
        if (result) {
          message.success("Cập nhật thông tin thành công!");
          setIsModalOpen(false);
          handleGet(); // Load lại danh sách mới
        }
      }
    } catch (info) {
      console.log("Validate Failed:", info);
    }
  };

  if (loading && users.length === 0) return <Loader />;

  return (
    <div>
      <h2>Quản lý User (Auto-fetch with useEffect)</h2>

      <Space>
        <Space>
          <Button type="primary" onClick={handleGet} disabled={loading}>
            Làm mới danh sách
          </Button>
          <Button onClick={handlePost} loading={loading}>
            Thêm User ngẫu nhiên
          </Button>
        </Space>
        {error && <Text type="danger">Lỗi: {error}</Text>}
      </Space>

      <h3>Danh sách ({users.length} người):</h3>
      <List
        grid={{ gutter: 16, column: 6 }}
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            <Card>
              <CardCustom
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Text strong>ID: {user.id}</Text>{" "}
                <Text strong>Name: {user.name}</Text>{" "}
                <Text strong>Age:{user.age}</Text>
                <Space>
                  <Button
                    type="primary"
                    onClick={() => showEditModal(user)}
                    disabled={loading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ✒️
                  </Button>
                  <Button
                    danger
                    onClick={() => handleDeleteById(user.id)}
                    disabled={loading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ❌
                  </Button>
                </Space>
              </CardCustom>
            </Card>
          </List.Item>
        )}
      />

      {/* MODAL CẬP NHẬT (PUT) */}
      <Modal
        title="Chỉnh sửa người dùng"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={() => setIsModalOpen(false)}
        confirmLoading={loading}
        okText="Lưu thay đổi"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" name="edit_user_form">
          <Form.Item
            name="name"
            label="Tên người dùng"
            rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Tuổi"
            rules={[{ required: true, message: "Vui lòng nhập tuổi!" }]}
          >
            <InputNumber min={1} max={120} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TestEx3;
