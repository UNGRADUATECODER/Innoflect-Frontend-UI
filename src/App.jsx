import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >    
      
       <div className="flex flex-col min-h-screen">
      <Navbar /> {/* fixed navbar */}

      {/* Main content */}
      <main className="flex-1 pt-16 pb-8">
        <h1 className="text-3xl font-bold mb-4">Page 1</h1>
        <p className='font-bold text-lg items-center'>update is coming..........</p>
      </main>

      <Footer />
    </div>
      </div>
  )
}

export default App