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
      price: "From £75/hour",
      rating: 4.9,
      reviews: 127
    },
    {
      icon: "🚐",
      title: "Event Transportation",
      description: "Reliable transportation for weddings, conferences, and special events.",
      price: "From £60/hour",
      rating: 4.8,
      reviews: 89
    },
    {
      icon: "🚛",
      title: "Delivery Services",
      description: "Professional drivers for package delivery and logistics support.",
      price: "From £45/hour",
      rating: 4.7,
      reviews: 156
    }
  ]

  const testimonials = [
    {
      role: "Event Coordinator",
      content: "DriverLynk made our corporate event seamless. Professional drivers and excellent communication.",
      rating: 5,
      avatar: "🎉"
    },
    {
      role: "Operations Manager", 
      content: "We've been using DriverLynk for over a year. Consistently reliable and professional service.",
      rating: 5,
      avatar: "💼"
    },
    {
      role: "Wedding Planner",
      content: "The drivers were perfect for our wedding. They arrived early, were impeccably dressed, and handled everything professionally.",
      rating: 5,
      avatar: "💒"
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
              className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-glass-card rounded-2xl p-8 hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-500/10 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                
                {/* Quote Icon */}
                <div className="text-4xl mb-6 text-accent-400/30">"</div>
                
                {/* Content */}
                <p className="text-text-secondary mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-xl mr-4 border-2 border-accent-400/50">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 mb-6 text-text-primary">Ready to Get Started?</h2>
            <p className="body-large text-text-secondary mb-8">
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