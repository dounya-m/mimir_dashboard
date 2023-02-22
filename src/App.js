import './App.css';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom'
import Layaout from './components/commun/Layaout';
import {Home, ErrorNotFound} from './pages/routes'

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layaout>{<Home />}</Layaout>} />
      <Route path="*" element={<Layaout>{<ErrorNotFound />}</Layaout>} />
      </Routes>
    </Router>
  );
}

export default App;
