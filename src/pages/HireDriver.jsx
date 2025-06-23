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

  const urgencyLevels = [
    { id: 'standard', name: 'Standard', description: 'Regular booking (24-48 hours)', price: 'Standard rates' },
    { id: 'priority', name: 'Priority', description: 'Quick booking (4-12 hours)', price: '+30% premium' },
    { id: 'urgent', name: 'Urgent', description: 'Immediate booking (1-4 hours)', price: '+60% premium' }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Submit Your Request",
      description: "Fill out our comprehensive form with your specific requirements and preferences.",
      icon: "📋",
      color: "accent"
    },
    {
      step: "02",
      title: "Get Matched",
      description: "We'll review your needs and match you with qualified drivers in your area.",
      icon: "🤝",
      color: "yellow"
    },
    {
      step: "03",
      title: "Receive Quote",
      description: "Get a detailed quote within 24 hours with transparent pricing and no hidden fees.",
      icon: "💰",
      color: "accent"
    },
    {
      step: "04",
      title: "Confirm & Go",
      description: "Once approved, we'll coordinate everything and you'll have 24/7 support.",
      icon: "✅",
      color: "yellow"
    }
  ]

  const benefits = [
    {
      icon: "🔒",
      title: "Vetted & Insured",
      description: "All drivers undergo comprehensive background checks and carry full insurance coverage.",
      color: "accent"
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Get matched with qualified drivers within minutes through our streamlined platform.",
      color: "yellow"
    },
    {
      icon: "📱",
      title: "Real-time Tracking",
      description: "Track your driver's location and estimated arrival time through our mobile app.",
      color: "accent"
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions or emergencies.",
      color: "yellow"
    },
    {
      icon: "💳",
      title: "Flexible Pricing",
      description: "Competitive pricing with no hidden fees and transparent billing options.",
      color: "accent"
    },
    {
      icon: "🌟",
      title: "Premium Service",
      description: "Professional drivers with luxury vehicles and exceptional service quality.",
      color: "yellow"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      company: "Premier Events",
      content: "DriverLynk made our corporate event seamless. Professional drivers, on-time service, and excellent communication throughout.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechCorp",
      content: "We've been using DriverLynk for our executive transportation needs for over a year. Consistently reliable and professional service.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Wedding Planner",
      company: "Dream Weddings",
      content: "The drivers from DriverLynk were perfect for our wedding. They arrived early, were impeccably dressed, and handled everything professionally.",
      rating: 5,
      avatar: "ER"
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }))
    }
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1)
        clearStepErrors()
      }
    } else {
      showToast('Please fix the errors before proceeding', 'error')
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      clearStepErrors()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateCurrentStep()) {
      showToast('Please fix the errors before submitting', 'error')
      return
    }
    
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
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="Enter contact person name"
                error={errors.contactName}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                placeholder="Enter your phone number"
                error={errors.phone}
              />
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Service Type <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleInputChange('serviceType', service.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left hover-lift ${
                      formData.serviceType === service.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.serviceType ? 'border-red-400' : ''}`}
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="font-semibold text-text-primary mb-1">{service.name}</div>
                    <div className="text-sm">{service.description}</div>
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
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Vehicle Type <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vehicleTypes.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => handleInputChange('vehicleType', vehicle.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.vehicleType === vehicle.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.vehicleType ? 'border-red-400' : ''}`}
                  >
                    <div className="text-2xl mb-2">{vehicle.icon}</div>
                    <div className="font-semibold text-text-primary mb-1">{vehicle.name}</div>
                    <div className="text-sm">{vehicle.description}</div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Duration"
                type="text"
                name="duration"
                value={formData.duration}
                onChange={(value) => handleInputChange('duration', value)}
                required
                placeholder="e.g., 4 hours, 1 day, ongoing"
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
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Urgency Level
              </label>
              <div className="space-y-3">
                {urgencyLevels.map((urgency) => (
                  <button
                    key={urgency.id}
                    type="button"
                    onClick={() => handleInputChange('urgency', urgency.id)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left hover-lift ${
                      formData.urgency === urgency.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-text-primary">{urgency.name}</div>
                        <div className="text-sm">{urgency.description}</div>
                      </div>
                      <div className="text-sm font-medium">{urgency.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Special Requirements
              </label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300"
                placeholder="Any special requirements or preferences..."
              />
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Budget Range"
                type="text"
                name="budget"
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                placeholder="e.g., $500-1000, flexible"
                error={errors.budget}
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
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all duration-300"
                placeholder="Any additional information that might be helpful..."
              />
            </div>

            <div className="bg-gradient-to-br from-accent-500/20 to-yellow-500/20 rounded-2xl p-6 border-2 border-accent-500/30">
              <h4 className="font-semibold text-text-primary mb-4">What Happens Next?</h4>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-start space-x-3">
                  <span className="text-accent-400 text-lg">1</span>
                  <span>We'll review your requirements and match you with qualified drivers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-400 text-lg">2</span>
                  <span>You'll receive a detailed quote within 24 hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-400 text-lg">3</span>
                  <span>Once approved, we'll coordinate with drivers and confirm your booking</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent-400 text-lg">4</span>
                  <span>You'll have 24/7 support throughout your service period</span>
                </div>
              </div>
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
      
      {/* Process Overview Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">How It Works</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Our streamlined process makes hiring professional drivers simple and efficient. 
              Get started in minutes and have drivers ready when you need them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                  step.color === 'accent' 
                    ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white' 
                    : 'bg-gradient-to-br from-yellow-500 to-yellow-600 text-primary-900'
                }`}>
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="heading-3 mb-4 text-text-primary">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-1 mb-6 text-text-primary">Hire Professional Drivers</h2>
              <p className="body-large text-text-secondary max-w-2xl mx-auto">
                Complete the form below and we'll match you with qualified drivers for your specific needs.
                Our comprehensive process ensures we understand your requirements perfectly.
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
              <div className="grid grid-cols-4 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`text-center p-4 rounded-2xl border-2 transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 text-text-secondary'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-2">{step.number}</div>
                    <div className="font-semibold text-text-primary text-sm mb-1">{step.title}</div>
                    <div className="text-xs">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-glass-card rounded-3xl p-8 shadow-2xl border-2 border-white/20">
              <form onSubmit={handleSubmit} className="space-y-8">
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="bg-white/10 backdrop-blur-xl text-text-primary font-bold px-8 py-4 rounded-xl transition-all duration-500 hover:bg-white/20 border border-white/20 hover:shadow-2xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
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

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-grid opacity-10"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Why Choose DriverLynk?</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              We combine technology, reliability, and professionalism to deliver exceptional driver services 
              that exceed your expectations every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl border-2 ${
                  benefit.color === 'accent' 
                    ? 'bg-gradient-to-br from-accent-500/20 to-accent-600/20 text-accent-400 border-accent-500/50' 
                    : 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 text-yellow-400 border-yellow-500/50'
                }`}>
                  {benefit.icon}
                </div>
                <h3 className="heading-3 mb-4 text-text-primary">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">What Our Clients Say</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about 
              their experience with DriverLynk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-glass-card rounded-2xl p-8 hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold mr-4 border-2 border-accent-400/50">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-1 mb-6 text-text-primary">Ready to Get Started?</h2>
            <p className="body-large text-text-secondary mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust DriverLynk for their professional driver needs. 
              Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#application-form"
                className="bg-white text-accent-600 font-bold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                Start Application
              </a>
              <a
                href="/contact"
                className="bg-white/20 backdrop-blur-xl text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 hover:bg-white/30 border border-white/30"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HireDriver 