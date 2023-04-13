import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activity from './pages/Activity';
import Place from './pages/Place';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/place" element={<Place />} />
    </Routes>
  );
}

export default App;
