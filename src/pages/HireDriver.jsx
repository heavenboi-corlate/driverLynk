import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import { useToast } from '../components/ToastContext'
import FormField from '../components/FormField'
import LoadingSpinner from '../components/LoadingSpinner'

const HireDriver = () => {
  const { showSuccess, showError, showInfo } = useToast()
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    vehicleType: '',
    startDate: '',
    duration: '',
    location: '',
    requirements: '',
    urgency: 'standard',
    budget: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
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

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    }
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type'
    }
    
    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select a vehicle type'
    }
    
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required'
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    
    if (!formData.duration) {
      newErrors.duration = 'Duration is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      showError('Please fix the errors in the form')
      return
    }
    
    setIsSubmitting(true)
    showInfo('Submitting your request...')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      showSuccess('Your driver request has been submitted successfully! We\'ll contact you within 24 hours.')
      
      // Reset form
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        serviceType: '',
        vehicleType: '',
        startDate: '',
        duration: '',
        location: '',
        requirements: '',
        urgency: 'standard',
        budget: ''
      })
      setErrors({})
      
    } catch (error) {
      showError('Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceTypes = [
    { value: 'temporary', label: 'Temporary Driver' },
    { value: 'permanent', label: 'Permanent Driver' },
    { value: 'emergency', label: 'Emergency Cover' },
    { value: 'dedicated', label: 'Dedicated Driver' },
    { value: 'corporate', label: 'Corporate Solution' }
  ]

  const vehicleTypes = [
    { value: 'car', label: 'Car' },
    { value: 'van', label: 'Van' },
    { value: 'transit', label: 'Transit Van' },
    { value: '7-5-ton', label: '7.5 Ton' },
    { value: 'hgv', label: 'HGV' },
    { value: 'specialist', label: 'Specialist Vehicle' }
  ]

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency (Same Day)', description: 'Urgent cover needed immediately' },
    { value: 'urgent', label: 'Urgent (24-48 hours)', description: 'Quick turnaround required' },
    { value: 'standard', label: 'Standard (1 week)', description: 'Regular booking with notice' }
  ]

  const durationOptions = [
    { value: '', label: 'Select duration' },
    { value: 'one-time', label: 'One-time service' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'ongoing', label: 'Ongoing contract' }
  ]

  return (
    <div className="animate-fade-in">
      <HeroSection 
        title="Hire a Driver"
        subtitle="Get a professional, vetted driver for your business needs"
        primaryButton={{ to: "/contact", text: "Contact Us" }}
        background="blue"
      />

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your requirements and we'll provide a tailored quote
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            {/* Company Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Company Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                  error={errors.companyName}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  }
                />

                <FormField
                  label="Contact Name"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  error={errors.contactName}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />

                <FormField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  error={errors.email}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />

                <FormField
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  required
                  error={errors.phone}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Service Requirements */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.serviceType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select service type</option>
                    {serviceTypes.map(service => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Type *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.vehicleType ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select vehicle type</option>
                    {vehicleTypes.map(vehicle => (
                      <option key={vehicle.value} value={vehicle.value}>
                        {vehicle.label}
                      </option>
                    ))}
                  </select>
                  {errors.vehicleType && (
                    <p className="text-red-500 text-sm mt-1">{errors.vehicleType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.startDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                    Duration *
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.duration ? 'border-red-500' : ''
                    }`}
                  >
                    {durationOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.duration && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{errors.duration}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Details</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  label="Location/Area *"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., London, Manchester, Birmingham"
                  required
                  error={errors.location}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                />

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {urgencyLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                <FormField
                  label="Budget Range"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $50-100/hour, $2000-5000/month"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  }
                />
              </div>

              <div className="mt-6">
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any specific requirements, routes, or additional information..."
                ></textarea>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" variant="white" showText={false} />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Submit Request</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose DriverLynk?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional, reliable, and fully compliant driver solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Vetted Drivers</h3>
              <p className="text-gray-600">All drivers undergo comprehensive background and license checks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Emergency cover available within 2-4 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Personal account management and ongoing support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HireDriver 