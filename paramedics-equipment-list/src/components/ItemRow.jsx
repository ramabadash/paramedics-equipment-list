import React, { useState } from 'react';

function ItemRow({ item, i }) {
  /***** STATES *****/
  const [currentQuantity, setCurrentQuantity] = useState(0);

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
    </tr>
  );
}

export default ItemRow;
