import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import { useToast } from '../components/ToastContext'
import FormField from '../components/FormField'
import LoadingSpinner from '../components/LoadingSpinner'

const ApplyDriver = () => {
  const { showSuccess, showError, showInfo } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    postcode: '',
    licenseType: '',
    experienceYears: '',
    vehicleTypes: [],
    availability: '',
    hourlyRate: '',
    aboutMe: '',
    emergencyContact: '',
    emergencyPhone: ''
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is required'
    }

    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select your license type'
    }

    if (!formData.experienceYears) {
      newErrors.experienceYears = 'Please select your years of experience'
    }

    if (formData.vehicleTypes.length === 0) {
      newErrors.vehicleTypes = 'Please select at least one vehicle type'
    }

    if (!formData.availability) {
      newErrors.availability = 'Please select your availability'
    }

    if (!formData.hourlyRate.trim()) {
      newErrors.hourlyRate = 'Please specify your hourly rate'
    }

    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = 'Emergency contact name is required'
    }

    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Emergency contact phone is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: checked 
        ? [...prev[name], value]
        : prev[name].filter(item => item !== value)
    }))

    // Clear error when user makes selection
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showError('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)
    showInfo('Submitting your application...')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      showSuccess('Your application has been submitted successfully! We\'ll review it and contact you within 3-5 business days.')
      
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
        licenseType: '',
        experienceYears: '',
        vehicleTypes: [],
        availability: '',
        hourlyRate: '',
        aboutMe: '',
        emergencyContact: '',
        emergencyPhone: ''
      })
      setErrors({})
      
    } catch (error) {
      showError('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const licenseTypes = [
    { value: '', label: 'Select license type' },
    { value: 'car', label: 'Car (Category B)' },
    { value: 'van', label: 'Van (Category C1)' },
    { value: 'truck', label: 'Truck (Category C)' },
    { value: 'bus', label: 'Bus (Category D)' },
    { value: 'motorcycle', label: 'Motorcycle (Category A)' }
  ]

  const experienceOptions = [
    { value: '', label: 'Select experience' },
    { value: '0-1', label: '0-1 years' },
    { value: '1-3', label: '1-3 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10+', label: '10+ years' }
  ]

  const vehicleTypeOptions = [
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'van', label: 'Van' },
    { value: 'truck', label: 'Truck' },
    { value: 'bus', label: 'Bus' },
    { value: 'motorcycle', label: 'Motorcycle' },
    { value: 'luxury', label: 'Luxury Vehicle' },
    { value: 'electric', label: 'Electric Vehicle' }
  ]

  const availabilityOptions = [
    { value: '', label: 'Select availability' },
    { value: 'full-time', label: 'Full-time (40+ hours/week)' },
    { value: 'part-time', label: 'Part-time (20-40 hours/week)' },
    { value: 'flexible', label: 'Flexible hours' },
    { value: 'weekends', label: 'Weekends only' },
    { value: 'evenings', label: 'Evenings only' },
    { value: 'on-demand', label: 'On-demand/As needed' }
  ]

  const heroData = {
    title: "Join Our Driver Network",
    subtitle: "Professional Opportunities",
    description: "Start your journey as a professional driver with DriverLynk. Competitive pay, flexible hours, and professional support.",
    primaryButton: {
      text: "Submit Application",
      link: "#application-form"
    },
    secondaryButton: {
      text: "Learn More",
      link: "#requirements"
    },
    backgroundImage: "/assets/images/hero/hero-bg.jpg"
  }

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      
      {/* Form Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">
                <h2 className="heading-2 mb-8 text-white">Driver Application</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="heading-3 mb-6 text-white">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                        error={errors.firstName}
                      />

                      <FormField
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                        error={errors.lastName}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        error={errors.email}
                      />

                      <FormField
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+44 (0) 123 456 7890"
                        required
                        error={errors.phone}
                      />
                    </div>

                    <FormField
                      label="Date of Birth"
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      error={errors.dateOfBirth}
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="heading-3 mb-6 text-white">Address</h3>
                    <FormField
                      label="Street Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your street address"
                      required
                      error={errors.address}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        required
                        error={errors.city}
                      />

                      <FormField
                        label="Postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        placeholder="Enter your postcode"
                        required
                        error={errors.postcode}
                      />
                    </div>
                  </div>

                  {/* Driving Information */}
                  <div>
                    <h3 className="heading-3 mb-6 text-white">Driving Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          License Type *
                        </label>
                        <select
                          name="licenseType"
                          value={formData.licenseType}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-white placeholder-gray-400 ${
                            errors.licenseType ? 'border-red-400' : ''
                          }`}
                          required
                        >
                          {licenseTypes.map(option => (
                            <option key={option.value} value={option.value} className="bg-primary-800">
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.licenseType && (
                          <p className="mt-2 text-sm text-red-400">{errors.licenseType}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          name="experienceYears"
                          value={formData.experienceYears}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-white placeholder-gray-400 ${
                            errors.experienceYears ? 'border-red-400' : ''
                          }`}
                          required
                        >
                          {experienceOptions.map(option => (
                            <option key={option.value} value={option.value} className="bg-primary-800">
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.experienceYears && (
                          <p className="mt-2 text-sm text-red-400">{errors.experienceYears}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Vehicle Types You Can Drive *
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {vehicleTypeOptions.map(option => (
                          <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              name="vehicleTypes"
                              value={option.value}
                              checked={formData.vehicleTypes.includes(option.value)}
                              onChange={handleCheckboxChange}
                              className="w-4 h-4 text-primary-600 border-gray-400 rounded focus:ring-primary-500 bg-white/5"
                            />
                            <span className="text-gray-300">{option.label}</span>
                          </label>
                        ))}
                      </div>
                      {errors.vehicleTypes && (
                        <p className="mt-2 text-sm text-red-400">{errors.vehicleTypes}</p>
                      )}
                    </div>
                  </div>

                  {/* Availability & Rate */}
                  <div>
                    <h3 className="heading-3 mb-6 text-white">Availability & Rate</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Availability *
                        </label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-white placeholder-gray-400 ${
                            errors.availability ? 'border-red-400' : ''
                          }`}
                          required
                        >
                          {availabilityOptions.map(option => (
                            <option key={option.value} value={option.value} className="bg-primary-800">
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors.availability && (
                          <p className="mt-2 text-sm text-red-400">{errors.availability}</p>
                        )}
                      </div>

                      <FormField
                        label="Expected Hourly Rate"
                        name="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={handleInputChange}
                        placeholder="e.g., £25/hour"
                        required
                        error={errors.hourlyRate}
                      />
                    </div>
                  </div>

                  {/* About You */}
                  <div>
                    <h3 className="heading-3 mb-6 text-white">About You</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about yourself
                      </label>
                      <textarea
                        name="aboutMe"
                        value={formData.aboutMe}
                        onChange={handleInputChange}
                        placeholder="Share your background, why you want to join DriverLynk, and any relevant experience..."
                        rows="4"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="heading-3 mb-6 text-white">Emergency Contact</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        label="Emergency Contact Name"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Full name of emergency contact"
                        required
                        error={errors.emergencyContact}
                      />

                      <FormField
                        label="Emergency Contact Phone"
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="Emergency contact phone number"
                        required
                        error={errors.emergencyPhone}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" variant="white" showText={false} />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
                <h3 className="heading-3 mb-6 text-white">Why Join DriverLynk?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Competitive Pay</h4>
                      <p className="text-gray-300 text-sm">Earn top rates with flexible payment options</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Flexible Hours</h4>
                      <p className="text-gray-300 text-sm">Choose your own schedule and work-life balance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Professional Support</h4>
                      <p className="text-gray-300 text-sm">24/7 support team and driver resources</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Growth Opportunities</h4>
                      <p className="text-gray-300 text-sm">Advance your career with training and certifications</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-lg">
                <h3 className="heading-3 mb-6 text-white">Application Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Submit Application</h4>
                      <p className="text-gray-300 text-sm">Complete the form with your details</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Background Check</h4>
                      <p className="text-gray-300 text-sm">We'll verify your credentials and history</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Interview</h4>
                      <p className="text-gray-300 text-sm">Meet with our team to discuss opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Start Driving</h4>
                      <p className="text-gray-300 text-sm">Begin your journey with DriverLynk</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white border border-primary-500/30">
                <h3 className="heading-3 mb-4 text-white">Requirements</h3>
                <ul className="space-y-2 text-primary-100">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Valid driver's license</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Clean driving record</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Background check clearance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Professional appearance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 11-16 0 8 8 0 0116 0zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Excellent customer service skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ApplyDriver 