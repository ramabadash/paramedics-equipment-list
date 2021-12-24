import React from 'react';
import EntryForm from './EntryForm';
import InventoryList from './InventoryList';
import End from './End';
import MissingItems from './MissingItems';
import { Routes, Route } from 'react-router-dom';
// Style
import '../styles/App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryForm />} />
        <Route path='/inventory' element={<InventoryList />} />
        <Route path='/end' element={<End />} />
        <Route path='/missing' element={<MissingItems />} />
      </Routes>
    </div>
  );
}

export default App;
