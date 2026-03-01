import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'
import Footer from '../Shared/Footer'

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Page content will be swapped via routes */}
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
