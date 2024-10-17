import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Patients } from './pages/Patients';
import { AddPatients } from './pages/AddPatients';
import { ViewPatient } from './pages/ViewPatient';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Patients />} />
        <Route path='/add' element={<AddPatients />} />
        <Route path='/view/:id' element={<ViewPatient />} />
      </Routes>
    </div>
  );
}

export default App;
