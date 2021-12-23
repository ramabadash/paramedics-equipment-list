import React from 'react';
import { fullEquipmentList } from '../data/db';
import AddItemForm from './AddItemForm';

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
            return [
              <tr key={i}>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.fullQuantity}</td>
                <td>
                  <input type='number' min={0} defaultValue={0} />
                </td>
                <td>?</td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
      <button>Submit</button>
      <AddItemForm />
    </div>
  );
}

export default InventoryList;
