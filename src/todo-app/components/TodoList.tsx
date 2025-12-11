import { List, ListItem } from "@mui/material";

interface ListProps<T> {
  // Generic type T
  items: T[]; // Array of items of type T
  renderItem: (item: T) => React.ReactNode; // Function to render each item
}

const ListGeneric = <T,>({ items, renderItem }: ListProps<T>) => {
  // Generic type T
  return (
    <List>
      {items.map(
        (
          item,
          index // Use index as key for simplicity
        ) => (
          <ListItem key={index}>{renderItem(item)}</ListItem> // Render each item using renderItem
        )
      )}
    </List>
  );
};

export default ListGeneric;
