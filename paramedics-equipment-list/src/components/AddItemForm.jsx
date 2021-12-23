import React from 'react';

function AddItemForm() {
  return (
    <div>
      <h3>Add new item:</h3>
      <div>
        <label htmlFor='item-name'>Item's name:</label>
        <input type='text' name='item-name' />
      </div>
      <div>
        <label htmlFor='full-quantity'>Full quantity:</label>
        <input type='number' name='full-quantity' />
      </div>
      <button>Add</button>
    </div>
  );
}

export default AddItemForm;
