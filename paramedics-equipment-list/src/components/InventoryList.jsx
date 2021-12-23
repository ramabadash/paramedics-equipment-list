import React from 'react';
import { fullEquipmentList } from '../data/db';
import AddItemForm from './AddItemForm';
import ItemRow from './ItemRow';

function InventoryList() {
  return (
    <div>
      <h2>Inventory List</h2>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item's name</th>
            <th>Full quantity</th>
            <th>Current quantity</th>
            <th>Missing</th>
          </tr>
        </thead>
        <tbody>
          {fullEquipmentList.map((item, i) => {
            return [<ItemRow item={item} i={i} key={i} />];
          })}
        </tbody>
      </table>
      <button>Submit</button>
      <AddItemForm />
    </div>
  );
}

export default InventoryList;
