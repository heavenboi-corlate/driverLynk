import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FormField from '../components/FormField'
import ProgressBar from '../components/ProgressBar'
import { useToast } from '../components/ToastContext'

const HireDriver = () => {
  const { showToast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    
    // Step 2: Service Requirements
    serviceType: '',
    vehicleType: '',
    duration: '',
    startDate: '',
    
    // Step 3: Location & Details
    pickupLocation: '',
    dropoffLocation: '',
    specialRequirements: '',
    urgency: 'standard',
    
    // Step 4: Additional Information
    budget: '',
    numberOfDrivers: '',
    additionalNotes: ''
  })

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
  }

  const validateStep1 = () => {
    const newErrors = {}
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }
    
    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select a vehicle type'
    }
    
    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required'
    }
    
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required'
    } else {
      const selectedDate = new Date(formData.startDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.startDate = 'Start date cannot be in the past'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Pickup location is required'
    }
    
    if (!formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation = 'Dropoff location is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep4 = () => {
    const newErrors = {}
    
    if (formData.numberOfDrivers && parseInt(formData.numberOfDrivers) < 1) {
      newErrors.numberOfDrivers = 'Number of drivers must be at least 1'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return validateStep1()
      case 2:
        return validateStep2()
      case 3:
        return validateStep3()
      case 4:
        return validateStep4()
      default:
        return true
    }
  }

  const clearStepErrors = () => {
    const stepFields = {
      1: ['companyName', 'contactName', 'email', 'phone'],
      2: ['serviceType', 'vehicleType', 'duration', 'startDate'],
      3: ['pickupLocation', 'dropoffLocation', 'specialRequirements'],
      4: ['budget', 'numberOfDrivers', 'additionalNotes']
    }
    
    const newErrors = { ...errors }
    stepFields[currentStep]?.forEach(field => {
      delete newErrors[field]
    })
    setErrors(newErrors)
  }

  const heroData = {
    title: "Hire Professional Drivers",
    subtitle: "Premium Driver Solutions",
    description: "Connect with qualified, vetted drivers for your business needs. Our streamlined process makes hiring drivers simple, efficient, and reliable.",
    primaryButton: {
      text: "Start Application",
      link: "#application-form"
    },
    secondaryButton: {
      text: "View Services",
      link: "/services"
    },
    backgroundImage: "/assets/images/hero/hero-bg.jpg"
  }

  const steps = [
    { number: 1, title: "Basic Information", description: "Tell us about your company" },
    { number: 2, title: "Service Requirements", description: "What type of service do you need?" },
    { number: 3, title: "Location & Details", description: "Where and when do you need drivers?" },
    { number: 4, title: "Additional Info", description: "Any special requirements?" }
  ]

  const serviceTypes = [
    { id: 'corporate', name: 'Corporate Transportation', icon: '🏢', description: 'Executive travel and business meetings' },
    { id: 'event', name: 'Event Transportation', icon: '🎉', description: 'Weddings, conferences, and special events' },
    { id: 'delivery', name: 'Delivery Services', icon: '📦', description: 'Package delivery and logistics' },
    { id: 'group', name: 'Group Transportation', icon: '👥', description: 'Large groups and tours' },
    { id: 'emergency', name: 'Emergency Services', icon: '🚨', description: 'Urgent transportation needs' },
    { id: 'fleet', name: 'Fleet Management', icon: '🚛', description: 'Complete fleet solutions' }
  ]

  const vehicleTypes = [
    { id: 'sedan', name: 'Sedan', icon: '🚗', description: 'Professional sedan for executives' },
    { id: 'suv', name: 'SUV', icon: '🚙', description: 'Spacious SUV for groups' },
    { id: 'van', name: 'Van', icon: '🚐', description: 'Van for larger groups' },
    { id: 'bus', name: 'Bus', icon: '🚌', description: 'Bus for large groups' },
    { id: 'luxury', name: 'Luxury', icon: '🏎️', description: 'Premium luxury vehicles' }
  ]

  const urgencyOptions = [
    { id: 'standard', name: 'Standard', description: 'Within 48 hours' },
    { id: 'urgent', name: 'Urgent', description: 'Within 24 hours' },
    { id: 'emergency', name: 'Emergency', description: 'Same day' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 4))
      clearStepErrors()
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    clearStepErrors()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateCurrentStep()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showToast('Application submitted successfully! We\'ll contact you within 24 hours.', 'success')
    setIsSubmitting(false)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 lg:space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <FormField
                label="Company Name"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={(value) => handleInputChange('companyName', value)}
                required
                placeholder="Enter your company name"
                error={errors.companyName}
              />
              <FormField
                label="Contact Name"
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={(value) => handleInputChange('contactName', value)}
                required
                placeholder="Enter contact person's name"
                error={errors.contactName}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <FormField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                required
                placeholder="Enter your email address"
                error={errors.email}
              />
              <FormField
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                required
                placeholder="07300 087989"
                error={errors.phone}
              />
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3 lg:mb-4">
                Service Type <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleInputChange('serviceType', service.id)}
                    className={`p-3 lg:p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.serviceType === service.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.serviceType ? 'border-red-400' : ''}`}
                  >
                    <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{service.icon}</div>
                    <div className="font-semibold text-text-primary text-sm lg:text-base mb-1">{service.name}</div>
                    <div className="text-xs lg:text-sm">{service.description}</div>
                  </button>
                ))}
              </div>
              {errors.serviceType && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.serviceType}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3 lg:mb-4">
                Vehicle Type <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                {vehicleTypes.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => handleInputChange('vehicleType', vehicle.id)}
                    className={`p-3 lg:p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.vehicleType === vehicle.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.vehicleType ? 'border-red-400' : ''}`}
                  >
                    <div className="text-xl lg:text-2xl mb-1 lg:mb-2">{vehicle.icon}</div>
                    <div className="font-semibold text-text-primary text-sm lg:text-base mb-1">{vehicle.name}</div>
                    <div className="text-xs lg:text-sm">{vehicle.description}</div>
                  </button>
                ))}
              </div>
              {errors.vehicleType && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.vehicleType}</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <FormField
                label="Duration"
                type="text"
                name="duration"
                value={formData.duration}
                onChange={(value) => handleInputChange('duration', value)}
                required
                placeholder="e.g., 4 hours, 1 day, 1 week"
                error={errors.duration}
              />
              <FormField
                label="Start Date"
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={(value) => handleInputChange('startDate', value)}
                required
                error={errors.startDate}
              />
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-4 lg:space-y-6 animate-fade-in-up">
            <FormField
              label="Pickup Location"
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={(value) => handleInputChange('pickupLocation', value)}
              required
              placeholder="Enter pickup address"
              error={errors.pickupLocation}
            />
            <FormField
              label="Dropoff Location"
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={(value) => handleInputChange('dropoffLocation', value)}
              required
              placeholder="Enter dropoff address"
              error={errors.dropoffLocation}
            />
            <FormField
              label="Special Requirements"
              type="text"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={(value) => handleInputChange('specialRequirements', value)}
              placeholder="Any special requirements or notes"
            />
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3 lg:mb-4">
                Urgency Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                {urgencyOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleInputChange('urgency', option.id)}
                    className={`p-3 lg:p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.urgency === option.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    }`}
                  >
                    <div className="font-semibold text-text-primary text-sm lg:text-base mb-1">{option.name}</div>
                    <div className="text-xs lg:text-sm">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-4 lg:space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <FormField
                label="Budget Range"
                type="text"
                name="budget"
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                placeholder="e.g., £500-1000"
              />
              <FormField
                label="Number of Drivers"
                type="number"
                name="numberOfDrivers"
                value={formData.numberOfDrivers}
                onChange={(value) => handleInputChange('numberOfDrivers', value)}
                placeholder="How many drivers do you need?"
                error={errors.numberOfDrivers}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Additional Notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                placeholder="Any additional information or special requests..."
              />
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      
      {/* Application Form Section */}
      <section id="application-form" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-1 mb-6 text-text-primary">Hire Professional Drivers</h2>
              <p className="body-large text-text-secondary max-w-2xl mx-auto">
                Complete the form below and we'll match you with qualified drivers for your specific needs.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <ProgressBar 
                progress={currentStep} 
                total={4} 
                color="accent"
                className="mb-8"
              />
              
              {/* Step Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`text-center p-3 lg:p-4 rounded-2xl border-2 transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 text-text-secondary'
                    }`}
                  >
                    <div className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">{step.number}</div>
                    <div className="font-semibold text-text-primary text-xs lg:text-sm mb-1">{step.title}</div>
                    <div className="text-xs hidden lg:block">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-glass-card rounded-3xl p-4 lg:p-8 shadow-2xl border-2 border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 lg:pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-xl text-text-primary font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-500 hover:bg-white/20 border border-white/20 hover:shadow-2xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HireDriver 