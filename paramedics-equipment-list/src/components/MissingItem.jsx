import React, { useState } from 'react';

function MissingItem({ index, item }) {
  /***** STATES *****/
  const [checked, setChecked] = useState(false);

  /***** FUNCTIONS *****/
  const toggleCheck = () => {
    setChecked(prevState => !prevState);
  };

  return (
    <li key={index}>
      <input type='checkbox' onClick={toggleCheck} />
      {checked
        ? [
            <span>
              <strike>{item.name}</strike>
            </span>,
            <span>
              <strike>{item.missing}</strike>
            </span>,
          ]
        : [<span>{item.name}</span>, <span>{item.missing}</span>]}
    </li>
  );
}

export default MissingItem;
