import * as React from 'react';
import AddItemForm from './AddItemForm.jsx';
import ItemList from './ItemList.jsx';

function ShoppingList() {
  const testi = ["päärynä", "viinirypäle", "mango"]; 
  const [items, setItems] = React.useState(testi);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  return (
    <div>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
}

export default ShoppingList;
