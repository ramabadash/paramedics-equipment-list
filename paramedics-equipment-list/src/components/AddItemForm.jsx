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
    if (!itemName || !fullQuantity) {
      console.log('missing details');
      return;
    } else {
      dispatch(addItem(itemName, fullQuantity));
    }
    setItemName('');
    setFullQuantity('');
  };
  return (
    <tfoot>
      <tr>
        <th className='index-table'>{numOfEquipment + 1}</th>
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
            min={0}
            onChange={e => setFullQuantity(e.target.value)}
          />
        </td>
        <td>
          <button onClick={handleAddItem} className='add-item-btn'>
            <i className='far fa-plus-square'></i> Add item
          </button>
        </td>
      </tr>
    </tfoot>
  );
}

export default AddItemForm;
