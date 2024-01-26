import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios';

// create an instance with default properties
axios.defaults.baseURL = 'https://api.nytimes.com/svc';
axios.defaults.params = {
  'api-key': 'Z8JZOKXyMy6jUsJNefDTYBWqyzw7GB8X',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
