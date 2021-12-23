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

export { reset, addItem };
