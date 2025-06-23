import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {
  const heroData = {
    title: "Professional Drivers",
    subtitle: "When You Need Them",
    description: "Connect with qualified, vetted drivers for your business needs. Available 24/7 with unmatched reliability.",
    primaryButton: {
      text: "Hire Drivers",
      link: "/hire-driver"
    },
    secondaryButton: {
      text: "Join Our Team",
      link: "/apply-driver"
    },
    backgroundImage: "/assets/images/hero/hero-bg.jpg"
  }

  const services = [
    {
      icon: "🚗",
      title: "Corporate Transportation",
      description: "Professional drivers for executive travel and business events.",
      price: "From $75/hour",
      rating: 4.9,
      reviews: 127
    },
    {
      icon: "🚐",
      title: "Event Transportation",
      description: "Reliable transportation for weddings, conferences, and special events.",
      price: "From $60/hour",
      rating: 4.8,
      reviews: 89
    },
    {
      icon: "🚛",
      title: "Delivery Services",
      description: "Professional drivers for package delivery and logistics support.",
      price: "From $45/hour",
      rating: 4.7,
      reviews: 156
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      company: "Premier Events",
      content: "DriverLynk made our corporate event seamless. Professional drivers and excellent communication.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "TechCorp",
      content: "We've been using DriverLynk for over a year. Consistently reliable and professional service.",
      rating: 5,
      avatar: "MC"
    }
  ]

  const features = [
    {
      icon: "🔒",
      title: "Vetted & Insured",
      description: "All drivers undergo background checks and carry full insurance."
    },
    {
      icon: "⚡",
      title: "Quick Booking",
      description: "Book a driver in minutes through our streamlined platform."
    },
    {
      icon: "📱",
      title: "Real-time Tracking",
      description: "Track your driver's location and estimated arrival time."
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      description: "Round-the-clock customer support for any questions."
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      
      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Why Choose DriverLynk?</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Professional, reliable, and available when you need us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="heading-3 mb-4 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-grid opacity-10"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Our Services</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Professional driver solutions for all your transportation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-primary px-8 py-4 text-lg font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">What Our Clients Say</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Trusted by businesses across the UK for professional driver services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">Ready to Get Started?</h2>
            <p className="body-large text-white/90 mb-8">
              Join hundreds of satisfied clients who trust DriverLynk for their professional driver needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hire-driver"
                className="bg-white text-accent-600 font-bold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                Hire Drivers
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-xl text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 hover:bg-white/30 border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 