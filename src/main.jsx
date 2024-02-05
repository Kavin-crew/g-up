import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AuthProvider } from './context/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <React.StrictMode>
            <AuthProvider>
               <App />
            </AuthProvider>
        </React.StrictMode>
    </LocalizationProvider>
);
