import { Table } from "antd";
import type { TableColumnsType } from "antd";
import type { Key } from "react";

type TableProductComponentProps<T> = {
  items: T[];
  columns: TableColumnsType<T>;
  rowKey?: (item: T) => Key;
};

export function TableProductComponent<T>({
  items,
  columns,
  rowKey,
}: TableProductComponentProps<T>) {
  return (
    <Table
      dataSource={items}
      columns={columns}
      rowKey={rowKey}
      pagination={false}
    />
  );
}
