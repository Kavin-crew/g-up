import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <App />
        </LocalizationProvider>
    </React.StrictMode>
);
