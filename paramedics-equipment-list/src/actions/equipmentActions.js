// Reset to initial state
const reset = () => {
  return {
    type: 'RESET',
  };
};

// Add new item
const addItem = (itemName, fullQuantity) => {
  return {
    type: 'ADD_ITEM',
    payload: { itemName, fullQuantity },
  };
};

// Delete item
const deleteItem = index => {
  return {
    type: 'DELETE_ITEM',
    payload: { index },
  };
};

export { reset, addItem, deleteItem };
