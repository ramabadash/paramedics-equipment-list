import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

// import { store } from './app/store';
// import { Provider } from 'react-redux';
// {
//   /* <Provider store={store}>
//   <App />
// </Provider> */
// }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
