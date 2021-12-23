import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/equipmentActions';

function ItemRow({ item, i }) {
  /***** STATES *****/
  const [currentQuantity, setCurrentQuantity] = useState(0);

  /***** FUNCTIONS *****/
  const dispatch = useDispatch();
  // Delete item from the form
  const handleDelete = () => {
    dispatch(deleteItem(i));
  };
  return (
    <tr key={i}>
      <td>
        <strong>{i}</strong>
      </td>
      <td>{item.name}</td>
      <td>{item.fullQuantity}</td>
      <td>
        <input
          type='number'
          min={0}
          defaultValue={0}
          onChange={e => {
            setCurrentQuantity(e.target.value);
          }}
        />
      </td>
      <td>
        {item.fullQuantity - currentQuantity < 0
          ? 0
          : item.fullQuantity - currentQuantity}
      </td>
      {item.deleteAble ? (
        <td>
          <button onClick={handleDelete}>DELETE</button>
        </td>
      ) : (
        ''
      )}
    </tr>
  );
}

export default ItemRow;
