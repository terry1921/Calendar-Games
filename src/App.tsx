import React from 'react'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import Calendar from './pages/Calendar'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <Calendar />
      </div>
    </LocalizationProvider>
  );
}

export default App;
