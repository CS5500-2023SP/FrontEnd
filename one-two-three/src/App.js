import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Activity from './pages/Activity'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  )
}

export default App
