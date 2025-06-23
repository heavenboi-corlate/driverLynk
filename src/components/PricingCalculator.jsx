import React, { useState } from 'react'

const PricingCalculator = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    serviceType: 'corporate',
    duration: 4,
    distance: 50,
    vehicleType: 'sedan',
    urgency: 'standard'
  })

  const serviceTypes = [
    { id: 'corporate', name: 'Corporate', baseRate: 75, icon: '🏢' },
    { id: 'event', name: 'Event', baseRate: 60, icon: '🎉' },
    { id: 'delivery', name: 'Delivery', baseRate: 45, icon: '📦' },
    { id: 'group', name: 'Group', baseRate: 90, icon: '👥' },
    { id: 'emergency', name: 'Emergency', baseRate: 100, icon: '🚨' }
  ]

  const vehicleTypes = [
    { id: 'sedan', name: 'Sedan', multiplier: 1.0, icon: '🚗' },
    { id: 'suv', name: 'SUV', multiplier: 1.2, icon: '🚙' },
    { id: 'van', name: 'Van', multiplier: 1.4, icon: '🚐' },
    { id: 'bus', name: 'Bus', multiplier: 2.0, icon: '🚌' },
    { id: 'luxury', name: 'Luxury', multiplier: 1.8, icon: '🏎️' }
  ]

  const urgencyLevels = [
    { id: 'standard', name: 'Standard', multiplier: 1.0 },
    { id: 'priority', name: 'Priority', multiplier: 1.3 },
    { id: 'urgent', name: 'Urgent', multiplier: 1.6 }
  ]

  const calculatePrice = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType)
    const vehicle = vehicleTypes.find(v => v.id === formData.vehicleType)
    const urgency = urgencyLevels.find(u => u.id === formData.urgency)
    
    const basePrice = service.baseRate * formData.duration
    const vehiclePrice = basePrice * vehicle.multiplier
    const urgencyPrice = vehiclePrice * urgency.multiplier
    const distancePrice = formData.distance * 0.5
    
    return Math.round(urgencyPrice + distancePrice)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const totalPrice = calculatePrice()

  return (
    <div className={`bg-glass-card rounded-3xl p-8 shadow-2xl border border-white/20 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="heading-2 mb-4 text-text-primary">Pricing Calculator</h3>
        <p className="text-text-secondary">Get an instant estimate for your transportation needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div className="space-y-6">
          {/* Service Type */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Service Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {serviceTypes.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleInputChange('serviceType', service.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                    formData.serviceType === service.id
                      ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 text-text-secondary'
                  }`}
                >
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <div className="font-semibold text-text-primary">{service.name}</div>
                  <div className="text-sm">From ${service.baseRate}/hr</div>
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Duration: {formData.duration} hours
            </label>
            <input
              type="range"
              min="1"
              max="24"
              value={formData.duration}
              onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-text-secondary mt-2">
              <span>1 hour</span>
              <span>24 hours</span>
            </div>
          </div>

          {/* Distance */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Distance: {formData.distance} miles
            </label>
            <input
              type="range"
              min="5"
              max="200"
              value={formData.distance}
              onChange={(e) => handleInputChange('distance', parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-text-secondary mt-2">
              <span>5 miles</span>
              <span>200 miles</span>
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Vehicle Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {vehicleTypes.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => handleInputChange('vehicleType', vehicle.id)}
                  className={`p-3 rounded-xl border transition-all duration-300 text-center ${
                    formData.vehicleType === vehicle.id
                      ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 text-text-secondary'
                  }`}
                >
                  <div className="text-xl mb-1">{vehicle.icon}</div>
                  <div className="font-semibold text-text-primary text-sm">{vehicle.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-3">
              Urgency Level
            </label>
            <div className="space-y-2">
              {urgencyLevels.map((urgency) => (
                <button
                  key={urgency.id}
                  onClick={() => handleInputChange('urgency', urgency.id)}
                  className={`w-full p-3 rounded-xl border transition-all duration-300 text-left ${
                    formData.urgency === urgency.id
                      ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                      : 'border-white/20 bg-white/5 hover:bg-white/10 text-text-secondary'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-text-primary">{urgency.name}</span>
                    <span className="text-sm">+{Math.round((urgency.multiplier - 1) * 100)}%</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-accent-500/20 to-yellow-500/20 rounded-2xl p-6 border border-accent-500/30">
            <div className="text-center">
              <div className="text-4xl font-bold text-text-primary mb-2">
                ${totalPrice}
              </div>
              <div className="text-text-secondary mb-4">Estimated Total</div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Base Rate:</span>
                  <span className="text-text-primary">${serviceTypes.find(s => s.id === formData.serviceType).baseRate * formData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Vehicle Upgrade:</span>
                  <span className="text-text-primary">+${Math.round(serviceTypes.find(s => s.id === formData.serviceType).baseRate * formData.duration * (vehicleTypes.find(v => v.id === formData.vehicleType).multiplier - 1))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Urgency Fee:</span>
                  <span className="text-text-primary">+${Math.round(serviceTypes.find(s => s.id === formData.serviceType).baseRate * formData.duration * vehicleTypes.find(v => v.id === formData.vehicleType).multiplier * (urgencyLevels.find(u => u.id === formData.urgency).multiplier - 1))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Distance:</span>
                  <span className="text-text-primary">${formData.distance * 0.5}</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between font-semibold">
                    <span className="text-text-primary">Total:</span>
                    <span className="text-accent-400">${totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-glass-card rounded-2xl p-6 border border-white/20">
            <h4 className="font-semibold text-text-primary mb-4">What's Included:</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center space-x-2">
                <span className="text-accent-400">✓</span>
                <span>Professional licensed driver</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-400">✓</span>
                <span>Fully insured vehicle</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-400">✓</span>
                <span>Real-time tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-400">✓</span>
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-accent-400">✓</span>
                <span>Flexible cancellation</span>
              </li>
            </ul>
          </div>

          <button className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator 