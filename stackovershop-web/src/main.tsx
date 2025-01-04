import React from 'react';
import ReactDOM from 'react-dom/client'; 
import AppRoutes from './routes';
import { ClerkProvider } from '@clerk/clerk-react';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container); 
  root.render(
    <React.StrictMode>
      <ClerkProvider publishableKey={"pk_test_bmV1dHJhbC1jb3VnYXItNTYuY2xlcmsuYWNjb3VudHMuZGV2JA"} afterSignOutUrl="/">
      <AppRoutes />
      </ClerkProvider>
    </React.StrictMode>
  );
}