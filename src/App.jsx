import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
  return (
    <ToastProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Navigation />
          <main id="main-content" className="flex-grow">
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