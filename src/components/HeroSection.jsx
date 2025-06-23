import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton, 
  backgroundImage,
  className = "" 
}) => {
  return (
    <section className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        {/* Background Image */}
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        )}
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="container-modern relative z-10 text-center pt-24 md:pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <span className="text-sm font-medium text-white">Premium Driver Staffing</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {title || "Professional Drivers"}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className="text-2xl md:text-3xl text-primary-200 mb-8 font-light">
              {subtitle}
            </h2>
          )}

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {description || "Connect with qualified, vetted drivers for your business needs. Available 24/7 with unmatched reliability and professionalism."}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {primaryButton && (
              <Link
                to={primaryButton.link}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center">
                  {primaryButton.text}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )}
            
            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/20 border border-white/20"
              >
                <span className="flex items-center">
                  {secondaryButton.text}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-white/60 mt-2 text-center">Scroll to explore</p>
      </div>
    </section>
  )
}

export default HeroSection 