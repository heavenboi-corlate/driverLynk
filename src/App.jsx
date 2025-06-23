import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/ToastContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AccessibilityMenu from './components/AccessibilityMenu'
import SkipToContent from './components/SkipToContent'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import HireDriver from './pages/HireDriver'
import ApplyDriver from './pages/ApplyDriver'

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <SkipToContent />
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
          <ScrollToTop />
          <AccessibilityMenu />
        </div>
      </Router>
    </ToastProvider>
  )
}

export default App 