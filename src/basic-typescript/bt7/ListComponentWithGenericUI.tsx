import type { TableColumnType } from "antd";
import ListComponentWithGeneric, {
  type Product,
  type User,
} from "./ListComponentWithGeneric";
import { TableProductComponent } from "./TableProductComponent";
const ListComponentWithGenericUI = () => {
  const names: (string | number)[] = ["An", 123];

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
  const userColumns: TableColumnType<User>[] = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
  ];
  return (
    <div>
      <ListComponentWithGeneric<string | number>
        items={names}
        renderItem={(name) => name.toString()}
      />
      <ListComponentWithGeneric<User>
        items={users}
        renderItem={(user) => (
          <div className="flex justify-between px-2 py-1 text-blue-900">
            {user.name} — {user.age}
          </div>
        )}
      />

      <ListComponentWithGeneric<Product>
        items={products}
        renderItem={(product) => `${product.title} - Giá: ${product.price}`}
      />
      <TableProductComponent<Product>
        items={products}
        columns={productColumns}
        rowKey={(p) => p.title}
      />
      <TableProductComponent<User>
        items={users}
        columns={userColumns}
        rowKey={(u) => u.name}
      />
    </div>
  );
};

export default ListComponentWithGenericUI;
