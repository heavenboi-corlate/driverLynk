import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({ 
  title = "Premium Driver Staffing Solutions",
  subtitle = "Connect with qualified, vetted drivers for your business needs. Professional, reliable, and ready to serve.",
  description = "We are committed to providing the highest quality of service to our clients and drivers. Our team of experts is dedicated to finding the perfect match for your business needs.",
  primaryButton = { text: "Hire Drivers", link: "/hire-driver" },
  secondaryButton = { text: "Apply as Driver", link: "/apply-driver" },
  backgroundImage = "/assets/images/hero/hero-bg.jpg",
  showStats = true,
  className = ""
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/60 to-primary-900/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-accent-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="container-modern relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-text-primary">Premium Driver Staffing Solutions</span>
          </div>

          {/* Title */}
          <h1 className="heading-1 text-text-primary mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <h2 className="heading-2 text-gradient-accent mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </h2>
          )}

          {/* Description */}
          <p className="body-large text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {primaryButton && (
              <Link
                to={primaryButton.link}
                className="btn-accent shadow-glow hover:shadow-glow-yellow transition-all duration-300"
              >
                {primaryButton.text}
              </Link>
            )}
            
            {secondaryButton && (
              <Link
                to={secondaryButton.link}
                className="btn-glass hover:bg-white/30 transition-all duration-300"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>

          {/* Stats */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-500 mb-2">500+</div>
                <div className="text-sm text-text-secondary">Professional Drivers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-300 mb-2">24/7</div>
                <div className="text-sm text-text-secondary">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">50+</div>
                <div className="text-sm text-text-secondary">Cities Served</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 