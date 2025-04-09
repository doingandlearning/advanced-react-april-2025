import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClaimDetail from './pages/ClaimDetail'
import UserDetail from './pages/UserDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">React Query Demo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claim/:id" element={<ClaimDetail />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
