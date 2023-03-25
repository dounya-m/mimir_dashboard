import React from 'react';
import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Layaout from './components/commun/Layaout';
import {Dashboard, Login, Students, ErrorNotFound} from './pages/routes'
import { AuthProvider } from './context/AuthContext';
function App() {


  return (
    <Router>
      <AuthProvider>
      <Routes>
      <Route path="/dashboard" element={<Layaout>{<Dashboard />}</Layaout>} />
      <Route path="/students" element={<Layaout>{<Students />}</Layaout>} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Layaout>{<ErrorNotFound />}</Layaout>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
