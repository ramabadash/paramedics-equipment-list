import React from 'react';
import EntryForm from './EntryForm';
import InventoryList from './InventoryList';
import End from './End';
import MissingItems from './MissingItems';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Style
import '../styles/App.css';

function App() {
  /***** FUNCTIONS *****/
  const navigate = useNavigate();

  // Navigate to entry form if not logged
  const isLogged = loggedAnswer => {
    if (!loggedAnswer) {
      navigate('/');
    }
  };

  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryForm />} />
        <Route
          path='/inventory'
          element={<InventoryList isLogged={isLogged} />}
        />
        <Route path='/end' element={<End isLogged={isLogged} />} />
        <Route path='/missing' element={<MissingItems isLogged={isLogged} />} />
      </Routes>
    </div>
  );
}

export default App;
