import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Layout/Dashboard'
import HeroSection from './components/sections/Herosection'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* Home page shows the HeroSection inside the dashboard layout */}
          <Route index element={<HeroSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App