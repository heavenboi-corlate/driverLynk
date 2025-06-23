import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import StatsSection from '../components/StatsSection'

const Home = () => {
  const services = [
    {
      title: "Corporate Drivers",
      description: "Professional drivers for executive transportation, corporate events, and business travel with the highest standards of service.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["Licensed & Vetted", "24/7 Availability", "Premium Vehicles", "Professional Service"],
      link: "/services#corporate",
      variant: "primary"
    },
    {
      title: "Emergency Drivers",
      description: "Rapid response drivers for urgent situations, medical transport, and emergency services with quick deployment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      features: ["Rapid Response", "Medical Certified", "GPS Tracking", "Emergency Protocols"],
      link: "/services#emergency",
      variant: "accent"
    },
    {
      title: "Van Drivers",
      description: "Skilled van drivers for deliveries, logistics, and transportation services with reliable and efficient service.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Cargo Certified", "Route Optimization", "Real-time Updates", "Flexible Scheduling"],
      link: "/services#van",
      variant: "yellow"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechCorp Ltd",
      content: "DriverLynk has transformed our corporate transportation. Their drivers are professional, punctual, and always maintain the highest standards.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Logistics Director",
      company: "Global Logistics",
      content: "The emergency driver service is exceptional. They respond within minutes and handle urgent situations with perfect professionalism.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      role: "Fleet Manager",
      company: "Express Delivery",
      content: "Our van drivers from DriverLynk have improved our delivery efficiency by 40%. Highly recommended for any logistics needs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ]

  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Companies Served",
      description: "Trusted by businesses across the UK",
      icon: "🏢"
    },
    {
      value: 2000,
      suffix: "+",
      label: "Drivers Placed",
      description: "Successfully matched drivers with opportunities",
      icon: "👨‍💼"
    },
    {
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Consistently high client satisfaction",
      icon: "⭐"
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Round-the-clock customer support",
      icon: "🕒"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-success-500/20"></div>
        </div>

        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gradient-primary mb-6">
              Our Premium Services
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Comprehensive driver staffing solutions tailored to your specific needs. 
              From corporate transportation to emergency services, we've got you covered.
            </p>
          </div>

          <div className="grid-modern">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-success-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about their experience with DriverLynk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-success-500/20"></div>
        </div>

        <div className="container-modern relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="body-large text-white/90 mb-8">
              Join hundreds of satisfied clients who trust DriverLynk for their driver staffing needs. 
              Get in touch today and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/hire-driver"
                className="btn-primary text-lg px-8 py-4 shadow-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Hire Drivers Now
              </a>
              <a
                href="/apply-driver"
                className="btn-glass text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300"
              >
                Apply as Driver
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 