import React from 'react';
import ReactDOM from 'react-dom/client'; 
import AppRoutes from './routes';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container); 
  root.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  );
}