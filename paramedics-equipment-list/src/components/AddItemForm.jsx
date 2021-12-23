import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/equipmentActions';

function AddItemForm({ numOfEquipment }) {
  /***** STATES *****/
  const [itemName, setItemName] = useState('');
  const [fullQuantity, setFullQuantity] = useState('');

  /***** STATES *****/
  const dispatch = useDispatch();
  // Add item to state
  const handleAddItem = () => {
    dispatch(addItem(itemName, fullQuantity));
    setItemName('');
    setFullQuantity('');
  };
  return (
    <tfoot>
      <tr>
        <th>{numOfEquipment}</th>
        <td>
          <input
            type='text'
            placeholder="Item's name"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </td>
        <td>
          <input
            type='number'
            placeholder='Full quantity'
            value={fullQuantity ? Number(fullQuantity) : ''}
            onChange={e => setFullQuantity(e.target.value)}
          />
        </td>
        <td></td>
        <td></td>
        <td>
          <button onClick={handleAddItem}>+Add</button>
        </td>
      </tr>
    </tfoot>
  );
}

export default AddItemForm;
