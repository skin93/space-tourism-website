import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrewPage from './pages/Crew';
import DestinationPage from './pages/Destination';
import HomePage from './pages/Home';
import TechnologyPage from './pages/Technology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/crew' element={<CrewPage />} />
        <Route path='/destination' element={<DestinationPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
