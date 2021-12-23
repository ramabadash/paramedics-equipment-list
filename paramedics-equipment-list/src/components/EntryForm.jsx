import React from 'react';

function EntryForm() {
  return (
    <div>
      <h2>Entrance to the shift</h2>
      <div>
        <label htmlFor='full-name'>Full name:</label>
        <input type='text' name='full-name' />
      </div>
      <div>
        <label htmlFor='ambulance-number'>Ambulance number:</label>
        <input type='text' name='ambulance-number' />
      </div>
      <div>
        <label htmlFor='date'>Date:</label>
        <input type='date' name='date' />
      </div>
      <div>
        <label htmlFor='shift'>Shift:</label>
        <select>
          <option value='morning'>Morning</option>
          <option value='evening'>Evening</option>
          <option value='night'>Night</option>
        </select>
      </div>
      <button>Continue to inventory list</button>
    </div>
  );
}

export default EntryForm;
