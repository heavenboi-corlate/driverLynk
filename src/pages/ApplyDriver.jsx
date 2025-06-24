import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FormField from '../components/FormField'
import ProgressBar from '../components/ProgressBar'
import { useToast } from '../components/ToastContext'

const ApplyDriver = () => {
  const { showToast } = useToast()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Step 2: Address & Contact
    address: '',
    city: '',
    postcode: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Step 3: Driving Information
    licenseType: '',
    experienceYears: '',
    vehicleTypes: [],
    
    // Step 4: Availability & About
    availability: '',
    hourlyRate: '',
    aboutMe: ''
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
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
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    } else {
      const birthDate = new Date(formData.dateOfBirth)
      const today = new Date()
      const age = today.getFullYear() - birthDate.getFullYear()
      if (age < 18) {
        newErrors.dateOfBirth = 'You must be at least 18 years old'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    
    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is required'
    }
    
    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = 'Emergency contact name is required'
    }
    
    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Emergency contact phone is required'
    } else if (!validatePhone(formData.emergencyPhone)) {
      newErrors.emergencyPhone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep3 = () => {
    const newErrors = {}
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select your license type'
    }
    
    if (!formData.experienceYears) {
      newErrors.experienceYears = 'Please select your years of experience'
    }
    
    if (formData.vehicleTypes.length === 0) {
      newErrors.vehicleTypes = 'Please select at least one vehicle type'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep4 = () => {
    const newErrors = {}
    
    if (!formData.availability) {
      newErrors.availability = 'Please select your availability'
    }
    
    if (!formData.hourlyRate.trim()) {
      newErrors.hourlyRate = 'Please specify your hourly rate'
    } else {
      const rate = parseFloat(formData.hourlyRate.replace(/[£,\s]/g, ''))
      if (isNaN(rate) || rate < 10) {
        newErrors.hourlyRate = 'Please enter a valid hourly rate (minimum £10)'
      }
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
      1: ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth'],
      2: ['address', 'city', 'postcode', 'emergencyContact', 'emergencyPhone'],
      3: ['licenseType', 'experienceYears', 'vehicleTypes'],
      4: ['availability', 'hourlyRate', 'aboutMe']
    }
    
    const newErrors = { ...errors }
    stepFields[currentStep]?.forEach(field => {
      delete newErrors[field]
    })
    setErrors(newErrors)
  }

  const heroData = {
    title: "Join Our Driver Network",
    subtitle: "Professional Opportunities",
    description: "Start your journey as a professional driver with DriverLynk. Competitive pay, flexible hours, and professional support.",
    primaryButton: {
      text: "Start Application",
      link: "#application-form"
    },
    secondaryButton: {
      text: "Learn More",
      link: "#requirements"
    },
    backgroundImage: "/assets/images/hero/hero-bg.jpg"
  }

  const steps = [
    { number: 1, title: "Personal Info", description: "Basic information" },
    { number: 2, title: "Address & Contact", description: "Location and emergency contact" },
    { number: 3, title: "Driving Info", description: "License and experience" },
    { number: 4, title: "Availability", description: "Schedule and preferences" }
  ]

  const licenseTypes = [
    { id: 'car', name: 'Car (Category B)', icon: '🚗', description: 'Standard car license' },
    { id: 'van', name: 'Van (Category C1)', icon: '🚐', description: 'Medium van license' },
    { id: 'truck', name: 'Truck (Category C)', icon: '🚛', description: 'Heavy goods vehicle' },
    { id: 'bus', name: 'Bus (Category D)', icon: '🚌', description: 'Passenger carrying vehicle' },
    { id: 'motorcycle', name: 'Motorcycle (Category A)', icon: '🏍️', description: 'Motorcycle license' }
  ]

  const experienceOptions = [
    { id: '0-1', name: '0-1 years', description: 'New driver' },
    { id: '1-3', name: '1-3 years', description: 'Some experience' },
    { id: '3-5', name: '3-5 years', description: 'Experienced driver' },
    { id: '5-10', name: '5-10 years', description: 'Very experienced' },
    { id: '10+', name: '10+ years', description: 'Expert driver' }
  ]

  const vehicleTypeOptions = [
    { id: 'sedan', name: 'Sedan', icon: '🚗' },
    { id: 'suv', name: 'SUV', icon: '🚙' },
    { id: 'van', name: 'Van', icon: '🚐' },
    { id: 'truck', name: 'Truck', icon: '🚛' },
    { id: 'bus', name: 'Bus', icon: '🚌' },
    { id: 'motorcycle', name: 'Motorcycle', icon: '🏍️' },
    { id: 'luxury', name: 'Luxury Vehicle', icon: '🏎️' },
    { id: 'electric', name: 'Electric Vehicle', icon: '⚡' }
  ]

  const availabilityOptions = [
    { id: 'full-time', name: 'Full-time', description: '40+ hours/week' },
    { id: 'part-time', name: 'Part-time', description: '20-40 hours/week' },
    { id: 'flexible', name: 'Flexible', description: 'Variable hours' },
    { id: 'weekends', name: 'Weekends only', description: 'Saturday & Sunday' },
    { id: 'evenings', name: 'Evenings only', description: 'After 6 PM' },
    { id: 'on-demand', name: 'On-demand', description: 'As needed basis' }
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
        [field]: ''
      }))
    }
  }

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      vehicleTypes: prev.vehicleTypes.includes(value)
        ? prev.vehicleTypes.filter(item => item !== value)
        : [...prev.vehicleTypes, value]
    }))

    // Clear error when user makes selection
    if (errors.vehicleTypes) {
      setErrors(prev => ({
        ...prev,
        vehicleTypes: ''
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
    
    if (!validateCurrentStep()) {
      showToast('Please fix the errors in the form', 'error')
      return
    }

    setIsSubmitting(true)
    showToast('Submitting your application...', 'info')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      showToast('Your application has been submitted successfully! We\'ll review it and contact you within 3-5 business days.', 'success')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        city: '',
        postcode: '',
        emergencyContact: '',
        emergencyPhone: '',
        licenseType: '',
        experienceYears: '',
        vehicleTypes: [],
        availability: '',
        hourlyRate: '',
        aboutMe: ''
      })
      setErrors({})
      setCurrentStep(1)
      
    } catch (error) {
      showToast('Failed to submit application. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                required
                placeholder="Enter your first name"
                error={errors.firstName}
              />
              <FormField
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
                required
                placeholder="Enter your last name"
                error={errors.lastName}
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
                placeholder="your@email.com"
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
            <FormField
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={(value) => handleInputChange('dateOfBirth', value)}
              required
              error={errors.dateOfBirth}
            />
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6 animate-fade-in-up">
            <FormField
              label="Street Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={(value) => handleInputChange('address', value)}
              required
              placeholder="Enter your street address"
              error={errors.address}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="City"
                type="text"
                name="city"
                value={formData.city}
                onChange={(value) => handleInputChange('city', value)}
                required
                placeholder="Enter your city"
                error={errors.city}
              />
              <FormField
                label="Postcode"
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={(value) => handleInputChange('postcode', value)}
                required
                placeholder="Enter your postcode"
                error={errors.postcode}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Emergency Contact Name"
                type="text"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={(value) => handleInputChange('emergencyContact', value)}
                required
                placeholder="Full name of emergency contact"
                error={errors.emergencyContact}
              />
              <FormField
                label="Emergency Contact Phone"
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={(value) => handleInputChange('emergencyPhone', value)}
                required
                placeholder="Emergency contact phone number"
                error={errors.emergencyPhone}
              />
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                License Type <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {licenseTypes.map((license) => (
                  <button
                    key={license.id}
                    type="button"
                    onClick={() => handleInputChange('licenseType', license.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.licenseType === license.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.licenseType ? 'border-red-400' : ''}`}
                  >
                    <div className="text-2xl mb-2">{license.icon}</div>
                    <div className="font-semibold text-text-primary mb-1">{license.name}</div>
                    <div className="text-sm">{license.description}</div>
                  </button>
                ))}
              </div>
              {errors.licenseType && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.licenseType}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Years of Experience <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {experienceOptions.map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => handleInputChange('experienceYears', exp.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.experienceYears === exp.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.experienceYears ? 'border-red-400' : ''}`}
                  >
                    <div className="font-semibold text-text-primary mb-1">{exp.name}</div>
                    <div className="text-sm">{exp.description}</div>
                  </button>
                ))}
              </div>
              {errors.experienceYears && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.experienceYears}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Vehicle Types You Can Drive <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {vehicleTypeOptions.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => handleCheckboxChange(vehicle.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-center hover-lift ${
                      formData.vehicleTypes.includes(vehicle.id)
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.vehicleTypes ? 'border-red-400' : ''}`}
                  >
                    <div className="text-2xl mb-2">{vehicle.icon}</div>
                    <div className="font-semibold text-text-primary text-sm">{vehicle.name}</div>
                  </button>
                ))}
              </div>
              {errors.vehicleTypes && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.vehicleTypes}</span>
                </div>
              )}
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Availability <span className="text-accent-400">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availabilityOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleInputChange('availability', option.id)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left hover-lift ${
                      formData.availability === option.id
                        ? 'border-accent-500 bg-accent-500/20 text-accent-400'
                        : 'border-white/30 bg-white/5 hover:bg-white/10 text-text-secondary hover:border-white/50'
                    } ${errors.availability ? 'border-red-400' : ''}`}
                  >
                    <div className="font-semibold text-text-primary mb-1">{option.name}</div>
                    <div className="text-sm">{option.description}</div>
                  </button>
                ))}
              </div>
              {errors.availability && (
                <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{errors.availability}</span>
                </div>
              )}
            </div>

            <FormField
              label="Expected Hourly Rate"
              type="text"
              name="hourlyRate"
              value={formData.hourlyRate}
              onChange={(value) => handleInputChange('hourlyRate', value)}
              required
              placeholder="e.g., £25/hour"
              error={errors.hourlyRate}
            />

            <div>
              <label className="block text-sm font-semibold text-text-primary mb-4">
                Tell us about yourself
              </label>
              <textarea
                name="aboutMe"
                value={formData.aboutMe}
                onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                placeholder="Share your background, why you want to join DriverLynk, and any relevant experience..."
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 resize-none text-white placeholder-gray-400"
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
              <h2 className="heading-1 mb-6 text-text-primary">Driver Application</h2>
              <p className="body-large text-text-secondary max-w-2xl mx-auto">
                Complete the form below to join our network of professional drivers. 
                Our comprehensive application process ensures we understand your skills and preferences.
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

      {/* Requirements Section */}
      <section id="requirements" className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Why Join DriverLynk */}
            <div className="lg:col-span-2">
              <div className="bg-glass-card rounded-2xl p-6 lg:p-8 border-2 border-white/20">
                <h3 className="heading-2 mb-6 lg:mb-8 text-text-primary">Why Join DriverLynk?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1 lg:mb-2 text-sm lg:text-base">Competitive Pay</h4>
                      <p className="text-text-secondary text-xs lg:text-sm">Earn top rates with flexible payment options and bonuses</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1 lg:mb-2 text-sm lg:text-base">Flexible Hours</h4>
                      <p className="text-text-secondary text-xs lg:text-sm">Choose your own schedule and maintain work-life balance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1 lg:mb-2 text-sm lg:text-base">Professional Support</h4>
                      <p className="text-text-secondary text-xs lg:text-sm">24/7 support team and comprehensive driver resources</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <svg className="w-5 h-5 lg:w-6 lg:h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1 lg:mb-2 text-sm lg:text-base">Growth Opportunities</h4>
                      <p className="text-text-secondary text-xs lg:text-sm">Advance your career with training and certifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-4 lg:p-6 text-white border-2 border-accent-400/30">
                <h3 className="heading-3 mb-4 lg:mb-6 text-white">Requirements</h3>
                <ul className="space-y-2 lg:space-y-3 text-accent-100">
                  <li className="flex items-center space-x-2 lg:space-x-3">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm lg:text-base">Valid driver's license</span>
                  </li>
                  <li className="flex items-center space-x-2 lg:space-x-3">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm lg:text-base">Clean driving record</span>
                  </li>
                  <li className="flex items-center space-x-2 lg:space-x-3">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm lg:text-base">Background check clearance</span>
                  </li>
                  <li className="flex items-center space-x-2 lg:space-x-3">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm lg:text-base">Professional appearance</span>
                  </li>
                  <li className="flex items-center space-x-2 lg:space-x-3">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm lg:text-base">Excellent customer service skills</span>
                  </li>
                </ul>
              </div>

              <div className="bg-glass-card rounded-2xl p-4 lg:p-6 border-2 border-white/20">
                <h3 className="heading-3 mb-4 lg:mb-6 text-text-primary">Application Process</h3>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-accent-600 text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-xs lg:text-sm">Submit Application</h4>
                      <p className="text-text-secondary text-xs">Complete the form with your details</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-accent-600 text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-xs lg:text-sm">Background Check</h4>
                      <p className="text-text-secondary text-xs">We'll verify your credentials</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-accent-600 text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-xs lg:text-sm">Interview</h4>
                      <p className="text-text-secondary text-xs">Meet with our team</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 bg-accent-600 text-white rounded-full flex items-center justify-center text-xs lg:text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-xs lg:text-sm">Start Driving</h4>
                      <p className="text-text-secondary text-xs">Begin your journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ApplyDriver 