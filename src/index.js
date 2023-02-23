import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//context for authenticating if there is a user that is log in
import {AuthContextProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //temporarily disable the strict mode to prevent error
  // <React.StrictMode>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
  // </React.StrictMode>
);

