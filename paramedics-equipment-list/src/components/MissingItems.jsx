import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Actions
import { reset as resetEquipment } from '../actions/equipmentActions';
import { reset as resetWorker } from '../actions/workerActions';
// Components
import MissingItem from './MissingItem';
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
      <div className='list-container'>
        <ul className='missing-item-list'>
          {missingItemsList.map((item, index) => {
            if (item.missing !== 0) {
              return <MissingItem index={index} item={item} />;
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default MissingItems;
