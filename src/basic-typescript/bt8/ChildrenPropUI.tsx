import type { TableColumnType } from "antd";
import type { Product, User } from "../bt7/ListComponentWithGeneric";
import ListComponentWithGeneric from "../bt7/ListComponentWithGeneric";
import ChildrenProp from "./ChildrenProp";
import { TableProductComponent } from "../bt7/TableProductComponent";

const ChildrenPropUI = () => {
  const users: User[] = [
    { name: "Hoàng", age: 23 },
    { name: "Minh", age: 24 },
  ];
  const products: Product[] = [
    { title: "iPhone 14", price: 20000000 },
    { title: "Samsung S23", price: 18000000 },
  ];
  const productColumns: TableColumnType<Product>[] = [
    {
      title: "Tên sản phẩm",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (value: number) => `${value.toLocaleString()} đ`,
    },
  ];
  return (
    <>
      <ChildrenProp title="Bảng sản phẩm">
        <TableProductComponent<Product>
          items={products}
          columns={productColumns}
          rowKey={(p) => p.title}
        />
      </ChildrenProp>
      <hr />
      <ChildrenProp title="Danh sách người dùng">
        <ListComponentWithGeneric<User>
          items={users}
          renderItem={(user) => (
            <div className="flex justify-between px-2 py-1 text-blue-900">
              {user.name} — {user.age}
            </div>
          )}
        />
      </ChildrenProp>
      <hr />
      <ChildrenProp title="Thông báo">
        <p>Bạn có tin nhắn mới!</p>
      </ChildrenProp>

      <hr />
    </>
  );
};

export default ChildrenPropUI;
