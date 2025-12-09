import { List, ListItem } from "@mui/material";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export interface User {
  name: string;
  age: number;
}

export interface Product {
  title: string;
  price: number;
}

function ListComponentWithGeneric<T>({ items, renderItem }: ListProps<T>) {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{renderItem(item)} </ListItem>
      ))}
    </List>
  );
}

export default ListComponentWithGeneric;
