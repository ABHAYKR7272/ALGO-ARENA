import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/UI/Navbar'
import Home from './pages/Home'
import Battle from './pages/Battle'
import NotFound from './pages/NotFound'
import './styles/globals.css'
import './styles/animations.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/battle"  element={<Battle />} />
        <Route path="*"        element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
