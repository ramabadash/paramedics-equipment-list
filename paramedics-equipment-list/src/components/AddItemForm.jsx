import React from 'react';

function AddItemForm() {
  return (
    <tfoot>
      <tr>
        <th>?</th>
        <td>
          <input type='text' placeholder="Item's name" />
        </td>
        <td>
          <input type='number' placeholder='Full quantity' />
        </td>
        <td></td>
        <td></td>
        <td>
          <button>+Add</button>
        </td>
      </tr>
    </tfoot>
  );
}

export default AddItemForm;
