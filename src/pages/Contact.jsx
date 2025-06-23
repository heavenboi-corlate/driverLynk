import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import FormField from '../components/FormField'
import { useToast } from '../components/ToastContext'

const Contact = () => {
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const heroData = {
    title: "Get in Touch",
    subtitle: "We're Here to Help",
    description: "Have questions about our services? Need to discuss your driver staffing requirements? We'd love to hear from you.",
    primaryButton: {
      text: "Start a Project",
      link: "/hire-driver"
    },
    secondaryButton: {
      text: "Join Our Team",
      link: "/apply-driver"
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: "123 Business Ave, Suite 100<br/>New York, NY 10001",
      action: "Get Directions"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "07300 087989<br/>Mon-Fri: 9AM-6PM GMT",
      action: "Call Now"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: "chipomhont@gmail.com<br/>info@driverlynk.com",
      action: "Send Email"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7<br/>Get instant support",
      action: "Start Chat"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you provide drivers?",
      answer: "We can typically provide qualified drivers within 24-48 hours, depending on your specific requirements and location."
    },
    {
      question: "What background checks do you perform?",
      answer: "We conduct comprehensive background checks including criminal history, driving record, drug testing, and employment verification."
    },
    {
      question: "Do you provide drivers for special events?",
      answer: "Yes! We specialize in event transportation and can provide drivers for corporate events, weddings, conferences, and more."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve major cities across the United Kingdom and are expanding rapidly. Contact us to check availability in your area."
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    showToast('Message sent successfully! We\'ll get back to you within 24 hours.', 'success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      
      {/* Contact Info Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Multiple Ways to Connect</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Choose the method that works best for you. Our team is ready to assist with any questions or requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="heading-3 mb-4 text-text-primary">{info.title}</h3>
                <div 
                  className="text-text-secondary mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: info.details }}
                />
                <button className="text-accent-400 hover:text-accent-300 font-semibold transition-colors duration-300">
                  {info.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-grid opacity-10"></div>
        <div className="container-modern relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="animate-fade-in-left">
              <h2 className="heading-1 mb-8 text-text-primary">Send Us a Message</h2>
              <p className="body-large text-text-secondary mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent requests, please call us directly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={(value) => handleInputChange('name', value)}
                    required
                    placeholder="Enter your full name"
                  />
                  <FormField
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    placeholder="Enter your phone number"
                  />
                  <FormField
                    label="Company"
                    type="text"
                    value={formData.company}
                    onChange={(value) => handleInputChange('company', value)}
                    placeholder="Enter your company name"
                  />
                </div>
                
                <FormField
                  label="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={(value) => handleInputChange('subject', value)}
                  required
                  placeholder="What's this about?"
                />
                
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-3">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
            
            {/* Info Card */}
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-yellow-500/20 rounded-3xl blur-3xl animate-pulse"></div>
                <div className="relative bg-glass-card rounded-3xl p-8 shadow-2xl">
                  <div className="text-6xl mb-6">💬</div>
                  <h3 className="heading-3 mb-6 text-text-primary">Why Contact Us?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-accent-400 text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Custom Solutions</h4>
                        <p className="text-text-secondary text-sm">Get personalized driver staffing solutions tailored to your specific needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-yellow-400 text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Expert Consultation</h4>
                        <p className="text-text-secondary text-sm">Speak with our transportation experts to optimize your operations.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-400 text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Quick Response</h4>
                        <p className="text-text-secondary text-sm">We respond to all inquiries within 24 hours, often much sooner.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-accent-500/10 rounded-xl border border-accent-500/20">
                    <p className="text-sm text-text-secondary">
                      <strong className="text-accent-400">Pro Tip:</strong> Include your specific requirements and timeline in your message for faster response times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Frequently Asked Questions</h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-glass-card rounded-2xl p-8 hover-lift transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="heading-3 mb-4 text-text-primary">{faq.question}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:07300087989"
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                <span>📞 Call Us</span>
              </a>
              <a 
                href="mailto:chipomhont@gmail.com"
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <span>✉️ Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 