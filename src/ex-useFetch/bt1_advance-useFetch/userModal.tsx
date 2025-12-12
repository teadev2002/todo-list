import React, { useEffect } from "react";
import { Modal, Form, Input, InputNumber, message } from "antd";
import { userApi } from "./userApi";
import type { User } from "./userType";

interface UserModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void; // Gọi lại sau khi POST/PUT thành công để load lại danh sách
  editingUser: User | null; // Nếu có dữ liệu là PUT, nếu null là POST
}

const UserModal: React.FC<UserModalProps> = ({
  open,
  onCancel,
  onSuccess,
  editingUser,
}) => {
  const [form] = Form.useForm();

  // Cập nhật dữ liệu vào form khi mở Modal hoặc khi editingUser thay đổi
  useEffect(() => {
    if (open) {
      if (editingUser) {
        form.setFieldsValue(editingUser);
      } else {
        form.resetFields();
      }
    }
  }, [open, editingUser, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      if (editingUser) {
        // --- Trường hợp PUT (Update) ---
        await userApi.updateUser(editingUser.id, values);
        message.success("Cập nhật nhân sự thành công!");
      } else {
        // --- Trường hợp POST (Create) ---
        await userApi.createUser(values);
        message.success("Thêm nhân sự mới thành công!");
      }

      onSuccess(); // Thông báo cho component cha tải lại data
      onCancel(); // Đóng modal
    } catch (error) {
      console.error("Submit error:", error);
      message.error("Đã có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <Modal
      title={editingUser ? "📑 Chỉnh sửa nhân sự" : "➕ Thêm nhân sự mới"}
      open={open}
      onOk={handleOk}
      onCancel={onCancel}
      okText={editingUser ? "Cập nhật" : "Tạo mới"}
      cancelText="Hủy"
      destroyOnClose // Xóa dữ liệu cũ khi đóng modal
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ age: 18 }} // Giá trị mặc định cho field tuổi
      >
        <Form.Item
          label="Tên nhân sự"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
        >
          <Input placeholder="Nhập họ và tên..." />
        </Form.Item>

        <Form.Item
          label="Tuổi"
          name="age"
          rules={[
            { required: true, message: "Vui lòng nhập tuổi!" },
            { type: "number", min: 1, max: 100, message: "Tuổi từ 1 đến 100!" },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Nhập số tuổi..."
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
