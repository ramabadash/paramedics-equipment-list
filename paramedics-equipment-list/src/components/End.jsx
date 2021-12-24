import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// Actions
import { reset as resetEquipment } from '../actions/equipmentActions';
import { reset as resetWorker } from '../actions/workerActions';
// Style
import '../styles/End.css';

function End({ isLogged }) {
  /***** STATES *****/
  // Get is logged
  const logged = useSelector(({ workerReducer }) => workerReducer.logged);

  /***** EFFECT *****/
  useEffect(() => {
    isLogged(logged);
  });

  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Show and hide missing items list
  const navigateToMissingList = () => {
    navigate('/missing');
  };

  // End and reset
  const handleEnd = () => {
    dispatch(resetEquipment());
    dispatch(resetWorker());
    navigate('/');
  };

  return (
    <div className='end-container'>
      <ul className='navigate-btns'>
        <li onClick={handleEnd} className='end-btn'>
          End <i className='far fa-times-circle'></i>
        </li>
        <li onClick={navigateToMissingList} className='show-btn'>
          Show me the missing items
        </li>
      </ul>
      <h2>ENJOY YOUR SHIFT!</h2>
      <img
        alt='ambulance-gif'
        src='https://c.tenor.com/221ka27UtMoAAAAi/ambulance-hospital.gif'
      />
    </div>
  );
}

export default End;
