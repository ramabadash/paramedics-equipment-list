import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset as resetEquipment } from '../actions/equipmentActions';
import { reset as resetWorker } from '../actions/workerActions';
// Style
import '../styles/MissingItems.css';

function MissingItems({ isLogged }) {
  /***** STATES*****/
  // Get missing items list from state
  const missingItemsList = useSelector(
    ({ equipmentReducer }) => equipmentReducer.shiftList
  );
  // Get is logged
  const logged = useSelector(({ workerReducer }) => workerReducer.logged);

  /***** EFFECT *****/
  useEffect(() => {
    isLogged(logged);
  });

  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // End and reset
  const handleEnd = () => {
    dispatch(resetEquipment());
    dispatch(resetWorker());
    navigate('/');
  };

  return (
    <div className='missing-items-container'>
      <ul className='navigate-btns'>
        <li onClick={handleEnd} className='end-btn-two'>
          End <i className='far fa-times-circle'></i>
        </li>
        <li onClick={() => navigate('/end')} className='back-btn'>
          Go back
        </li>
      </ul>
      <h2>Missing item's</h2>
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
    </div>
  );
}

export default MissingItems;
