import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      name,
      category,
    };
    onItemFormSubmit(newItem);
    setName("");
    setCategory("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="category-input">Category:</label>
      <input
        id="category-input"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
