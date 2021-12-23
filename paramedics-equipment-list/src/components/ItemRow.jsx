import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/equipmentActions';

function ItemRow({ item, i, setMissingItems }) {
  /***** STATES *****/
  const [currentQuantity, setCurrentQuantity] = useState(0);

  /***** FUNCTIONS *****/
  const dispatch = useDispatch();

  // Delete item from the form
  const handleDelete = () => {
    // Filter from full equipment list
    dispatch(deleteItem(i));
    // Filter from missing list
    setMissingItems(prevState => {
      const copyOfArr = [...prevState];
      return copyOfArr.filter((item, index) => index !== i);
    });
  };

  // On Current quantity change update two states
  const handleQuantityChange = e => {
    const quantity = e.target.value;
    setCurrentQuantity(quantity);

    // If missing item is already 0
    if (currentQuantity < item.fullQuantity) {
      setMissingItems(prevState => {
        const UpdateItems = [...prevState]; // Copy the array
        const missingQuantity =
          item.fullQuantity - quantity < 0 ? 0 : item.fullQuantity - quantity;
        UpdateItems[i].missing = missingQuantity; // Update the missing quantity of an item
        return UpdateItems;
      });
    }
  };
  /***** EFFECT *****/
  // Build the array with objects {name : ? , missing: ?} for every item on first render
  useEffect(() => {
    setMissingItems(prevState => [
      ...prevState,
      { name: item.name, missing: Number(item.fullQuantity) },
    ]);
  }, []);

  return (
    <tr key={i}>
      <td>
        <strong>{i + 1}</strong>
      </td>
      <td>{item.name}</td>
      <td>{item.fullQuantity}</td>
      <td>
        <input
          type='number'
          min={0}
          defaultValue={0}
          onChange={handleQuantityChange}
        />
      </td>
      <td>
        {item.fullQuantity - currentQuantity < 0
          ? 0
          : item.fullQuantity - currentQuantity}
      </td>
      {item.deleteAble ? (
        <td>
          <button onClick={handleDelete}>
            <i className='far fa-trash-alt'></i>
          </button>
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  );
}

export default ItemRow;
