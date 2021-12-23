import React from 'react';
import EntryForm from './EntryForm';
import InventoryList from './InventoryList';
// Style
import '../styles/App.css';

function App() {
  return (
    <div>
      <h1>Welcome to the shift!</h1>
      <EntryForm />
      <InventoryList />
    </div>
  );
}

export default App;
