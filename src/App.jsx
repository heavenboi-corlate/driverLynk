import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/ToastContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import HireDriver from './pages/HireDriver'
import ApplyDriver from './pages/ApplyDriver'
import LiveChat from './components/LiveChat'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure content is visible after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ToastProvider>
      <Router>
        <div className={`App min-h-screen flex flex-col ${isLoaded ? 'loaded' : ''}`}>
          <Navigation />
          <main id="main-content" className="flex-grow" style={{ opacity: 1, visibility: 'visible' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hire-driver" element={<HireDriver />} />
              <Route path="/apply-driver" element={<ApplyDriver />} />
            </Routes>
          </main>
          <Footer />
          <LiveChat />
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App 