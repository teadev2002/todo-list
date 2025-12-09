import { List, ListItem } from "@mui/material";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function ListGeneric<T>({ items, renderItem }: ListProps<T>) {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{renderItem(item)}</ListItem>
      ))}
    </List>
  );
}

export default ListGeneric;
