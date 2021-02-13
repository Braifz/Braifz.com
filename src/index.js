import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Footer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
