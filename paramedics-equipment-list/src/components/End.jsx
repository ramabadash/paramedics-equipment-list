import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset as resetEquipment } from '../actions/equipmentActions';
import { reset as resetWorker } from '../actions/workerActions';
import { useNavigate } from 'react-router-dom';
// Style
import '../styles/End.css';

function End() {
  /***** STATES *****/
  // Get missing items list from state
  const missingItemsList = useSelector(
    ({ equipmentReducer }) => equipmentReducer.shiftList
  );

  const [showList, setShowList] = useState(false);

  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // Show and hide missing items list
  const toggleShowList = () => {
    setShowList(prevState => !prevState);
  };
  // End and reset
  const handleEnd = () => {
    dispatch(resetEquipment());
    dispatch(resetWorker());
    navigate('/');
  };

  return (
    <div className='end-container'>
      <h2>ENJOY YOUR SHIFT!</h2>
      <img
        alt='ambulance-gif'
        src='https://c.tenor.com/221ka27UtMoAAAAi/ambulance-hospital.gif'
      />
      <div>
        <button onClick={toggleShowList} className='show-btn'>
          Show me the missing items
        </button>
        <button onClick={handleEnd} className='end-btn'>
          End <i className='far fa-times-circle'></i>
        </button>
      </div>
      {/* OPTIONAL SHOW TABLE OF MISSING ITEMS */}
      {showList ? (
        <div className='table-container'>
          <table>
            <thead>
              <tr>
                <th>Item's name</th>
                <th>Missing</th>
              </tr>
            </thead>
            <tbody>
              {missingItemsList.map((item, index) => {
                if (item.missing !== 0) {
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.missing}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      ) : (
        ' '
      )}
    </div>
  );
}

export default End;
