import React from 'react';
import EntryForm from './EntryForm';
import InventoryList from './InventoryList';
import End from './End';
import { Routes, Route } from 'react-router-dom';
// Style
import '../styles/App.css';

function App() {
  return (
    <div>
      <h1>Welcome to the shift!</h1>
      <Routes>
        <Route path='/' element={<EntryForm />} />
        <Route path='/inventory' element={<InventoryList />} />
        <Route path='/end' element={<End />} />
      </Routes>
    </div>
  );
}

export default App;
