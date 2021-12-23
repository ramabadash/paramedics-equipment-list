import React from 'react';
import { useSelector } from 'react-redux';
import AddItemForm from './AddItemForm';
import ItemRow from './ItemRow';

function InventoryList() {
  /***** STATES *****/
  const fullEquipmentList = useSelector(
    ({ equipmentReducer }) => equipmentReducer.requiredEquipmentList
  );

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
            return <ItemRow item={item} i={i} key={i} />;
          })}
        </tbody>
        <AddItemForm numOfEquipment={fullEquipmentList.length} />
      </table>
      <button>Submit</button>
    </div>
  );
}

export default InventoryList;
