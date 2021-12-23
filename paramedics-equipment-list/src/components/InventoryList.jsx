import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddItemForm from './AddItemForm';
import ItemRow from './ItemRow';

function InventoryList() {
  /***** STATES *****/
  // Get full list from state
  const fullEquipmentList = useSelector(
    ({ equipmentReducer }) => equipmentReducer.requiredEquipmentList
  );

  const [missingItems, setMissingItems] = useState([]); // State to all the missing items [{name: "equipment", missing: "80"}, ...]

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
            return (
              <ItemRow
                item={item}
                i={i}
                key={i}
                setMissingItems={setMissingItems}
              />
            );
          })}
        </tbody>
        <AddItemForm numOfEquipment={fullEquipmentList.length} />
      </table>
      <button>Submit</button>
    </div>
  );
}

export default InventoryList;
