import React, { useState, useEffect } from 'react'

const InteractiveMap = ({ className = "" }) => {
  const [activeCity, setActiveCity] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const cities = [
    { id: 'nyc', name: 'New York', x: 85, y: 35, drivers: 45, rating: 4.9 },
    { id: 'la', name: 'Los Angeles', x: 15, y: 60, drivers: 38, rating: 4.8 },
    { id: 'chicago', name: 'Chicago', x: 70, y: 40, drivers: 32, rating: 4.9 },
    { id: 'miami', name: 'Miami', x: 80, y: 75, drivers: 28, rating: 4.7 },
    { id: 'seattle', name: 'Seattle', x: 20, y: 25, drivers: 25, rating: 4.8 },
    { id: 'denver', name: 'Denver', x: 45, y: 45, drivers: 22, rating: 4.6 },
    { id: 'atlanta', name: 'Atlanta', x: 75, y: 60, drivers: 30, rating: 4.8 },
    { id: 'dallas', name: 'Dallas', x: 55, y: 65, drivers: 26, rating: 4.7 },
    { id: 'phoenix', name: 'Phoenix', x: 30, y: 65, drivers: 20, rating: 4.6 },
    { id: 'boston', name: 'Boston', x: 90, y: 30, drivers: 35, rating: 4.9 }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative ${className}`}>
      {/* Map Container */}
      <div className="relative w-full h-96 bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl overflow-hidden border border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-animated-grid opacity-10"></div>
        
        {/* Map Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-yellow-500/5"></div>
        
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {cities.map((city, index) => 
            cities.slice(index + 1).map((otherCity, otherIndex) => (
              <line
                key={`${city.id}-${otherCity.id}`}
                x1={`${city.x}%`}
                y1={`${city.y}%`}
                x2={`${otherCity.x}%`}
                y2={`${otherCity.y}%`}
                stroke="rgba(231, 76, 60, 0.1)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${(index + otherIndex) * 0.1}s` }}
              />
            ))
          )}
        </svg>

        {/* City Markers */}
        {cities.map((city, index) => (
          <div
            key={city.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ 
              left: `${city.x}%`, 
              top: `${city.y}%`,
              animationDelay: `${index * 0.1}s`
            }}
            onMouseEnter={() => setActiveCity(city)}
            onMouseLeave={() => setActiveCity(null)}
          >
            {/* Pulse Ring */}
            <div className="absolute inset-0 w-4 h-4 bg-accent-500/30 rounded-full animate-ping"></div>
            
            {/* City Dot */}
            <div className={`relative w-4 h-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
              activeCity?.id === city.id ? 'scale-150' : 'hover:scale-125'
            }`}></div>
            
            {/* City Label */}
            <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
              activeCity?.id === city.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <div className="bg-glass-card backdrop-blur-xl rounded-xl px-3 py-2 shadow-xl border border-white/20">
                <div className="text-sm font-semibold text-text-primary">{city.name}</div>
                <div className="text-xs text-text-secondary">
                  {city.drivers} drivers • {city.rating}★
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Floating Elements */}
        <div className="absolute top-4 left-4 bg-glass-card backdrop-blur-xl rounded-xl px-4 py-3 shadow-xl border border-white/20">
          <div className="text-sm font-semibold text-text-primary">Service Areas</div>
          <div className="text-xs text-text-secondary">50+ cities nationwide</div>
        </div>

        <div className="absolute bottom-4 right-4 bg-glass-card backdrop-blur-xl rounded-xl px-4 py-3 shadow-xl border border-white/20">
          <div className="text-sm font-semibold text-accent-400">Live Coverage</div>
          <div className="text-xs text-text-secondary">Real-time availability</div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
          <span className="text-sm text-text-secondary">Active Cities</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-sm text-text-secondary">High Demand</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
          <span className="text-sm text-text-secondary">Expanding</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-text-secondary">Premium Service</span>
        </div>
      </div>
    </div>
  )
}

export default InteractiveMap 