import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { workerLogin } from '../actions/workerActions';
//Style
import '../styles/EntryForm.css';

function EntryForm() {
  /***** STATE *****/
  const [fullName, setFullName] = useState('');
  const [date, setDate] = useState('');
  const [ambulanceNumber, setAmbulanceNumber] = useState('');
  const [shift, setShift] = useState('morning');

  /***** FUNCTIONS *****/
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!fullName || !date || !ambulanceNumber || !shift) {
      // TODO - add error alert
      console.log('missing details');
      return;
    } else {
      dispatch(workerLogin(fullName, date, ambulanceNumber, shift)); // Save to state
      navigate('/inventory'); // Go to next form
    }
  };

  return (
    <div className='entry-form-container'>
      <h1>Welcome to the shift!</h1>
      <h2>Enter your details:</h2>
      <div className='input-form-container'>
        <label htmlFor='full-name'>Full name:</label>
        <input
          type='text'
          name='full-name'
          onChange={e => setFullName(e.target.value)}
        />
      </div>
      <div className='input-form-container'>
        <label htmlFor='date'>Date:</label>
        <input
          type='date'
          name='date'
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <div className='input-form-container'>
        <label htmlFor='ambulance-number'>Ambulance number:</label>
        <input
          type='number'
          name='ambulance-number'
          onChange={e => setAmbulanceNumber(e.target.value)}
        />
      </div>
      <div className='input-form-container'>
        <label htmlFor='shift'>Shift:</label>
        <select onChange={e => setShift(e.target.value)}>
          <option value='morning'>Morning</option>
          <option value='evening'>Evening</option>
          <option value='night'>Night</option>
        </select>
      </div>
      <button onClick={handleSubmit}>
        Continue to inventory list <i className='far fa-hand-point-right'></i>
      </button>
    </div>
  );
}

export default EntryForm;
