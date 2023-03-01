import { useState } from "react";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
