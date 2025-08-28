import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Instalacion from './pages/Instalacion'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instalacion" element={<Instalacion />} />
      </Routes>
    </Router>
  )
}

export default App