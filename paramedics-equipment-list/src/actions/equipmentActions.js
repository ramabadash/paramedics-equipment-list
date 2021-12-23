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

// Submit form with all the missing items
const submitEquipmentForm = data => {
  return {
    type: 'SUBMIT_EQUIPMENT_FORM',
    payload: { data },
  };
};

export { reset, addItem, deleteItem, submitEquipmentForm };
