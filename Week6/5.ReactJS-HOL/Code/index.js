import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// I was not able to understand the zip file download concept
// therefore created the REACT app through CRA (create-react-app) method only.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

