// TestEx4.tsx
import { useState } from "react";
import { useFetchCache, invalidateCache } from "./useFetchCache";
import { useFetchMutate } from "../bt3_mutate/useFetchMutate";
import { userServiceFetchCache } from "./userServiceFetchCache";
import {
  API_ENDPOINT,
  type User,
} from "../bt2_refetch_dependency-array/TestEx2";
import { Button, Input, List, message, Space } from "antd";

export default function TestEx4() {
  const { data: users } = useFetchCache<User[]>(API_ENDPOINT);
  const { request, loading } = useFetchMutate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  async function handleCreate() {
    const newUser = await userServiceFetchCache.createUser(request, {
      name,
      age: Number(age),
    });

    if (!newUser) return;

    //  lấy cache cũ
    const current = users ?? [];
    invalidateCache(API_ENDPOINT, [newUser, ...current]);
    setName("");
    setAge("");
    invalidateCache(API_ENDPOINT);
    message.success("User created successfully");
  }

  async function handleDelete(id: string) {
    if (!users) return;
    await userServiceFetchCache.deleteUser(request, id);
    invalidateCache(
      API_ENDPOINT,
      users.filter((u) => u.id !== id)
    );
    invalidateCache(API_ENDPOINT);
    message.error("User deleted successfully");
  }

  return (
    <div>
      <h2>User List</h2>

      <div style={{ display: "flex" }}>
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button type="primary" onClick={handleCreate} disabled={loading}>
          Add
        </Button>
      </div>

      <List
        bordered
        dataSource={users}
        renderItem={(u) => (
          <List.Item
            actions={[
              <Button danger size="small" onClick={() => handleDelete(u.id)}>
                X
              </Button>,
            ]}
          >
            <Space>
              <strong>{u.name}</strong>
              <span>Age: {u.age}</span>
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
}
