import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const heroData = {
    title: "Our Services",
    subtitle: "Professional Solutions",
    description: "Comprehensive driver staffing solutions for all your transportation needs. Professional, reliable, and available 24/7.",
    primaryButton: {
      text: "Get Started",
      link: "/hire-driver"
    },
    secondaryButton: {
      text: "Contact Us",
      link: "/contact"
    },
    backgroundImage: "/assets/images/hero/services-hero.jpg"
  }

  const services = [
    {
      icon: "🚗",
      title: "Corporate Transportation",
      description: "Professional drivers for executive travel, client meetings, and business events.",
      features: ["Luxury vehicles", "Professional attire", "24/7 availability", "Real-time tracking"],
      price: "From £75/hour",
      rating: 4.9,
      reviews: 127,
      availability: "Available Now",
      badge: "Most Popular"
    },
    {
      icon: "🚐",
      title: "Event Transportation",
      description: "Reliable transportation for weddings, conferences, and special events.",
      features: ["Event coordination", "Multiple vehicles", "Flexible scheduling", "Professional service"],
      price: "From £60/hour",
      rating: 4.8,
      reviews: 89,
      availability: "Available Now",
      badge: "Best Value"
    },
    {
      icon: "🚛",
      title: "Delivery Services",
      description: "Professional drivers for package delivery and logistics support.",
      features: ["Real-time tracking", "Insurance coverage", "Same-day delivery", "Secure handling"],
      price: "From £45/hour",
      rating: 4.7,
      reviews: 156,
      availability: "Available Now"
    },
    {
      icon: "🚌",
      title: "Group Transportation",
      description: "Safe and comfortable transportation for groups and tours.",
      features: ["Large capacity", "Experienced drivers", "Route planning", "Group coordination"],
      price: "From £90/hour",
      rating: 4.9,
      reviews: 203,
      availability: "Available Now",
      badge: "Group Special"
    },
    {
      icon: "🚙",
      title: "Emergency Services",
      description: "Rapid response transportation for urgent business needs.",
      features: ["Quick response", "Priority booking", "Emergency support", "24/7 availability"],
      price: "From £100/hour",
      rating: 4.8,
      reviews: 67,
      availability: "Available Now",
      badge: "Emergency"
    },
    {
      icon: "🏢",
      title: "Fleet Management",
      description: "Complete fleet management solutions for businesses.",
      features: ["Fleet optimization", "Driver training", "Maintenance tracking", "Analytics"],
      price: "Custom pricing",
      rating: 4.9,
      reviews: 45,
      availability: "Available Now",
      badge: "Enterprise"
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      
      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-white">Our Services</h2>
            <p className="body-large text-gray-300 max-w-2xl mx-auto">
              Professional driver solutions for every need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-grid opacity-10"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-white">Why Choose DriverLynk?</h2>
            <p className="body-large text-gray-300 max-w-2xl mx-auto">
              Professional, reliable, and available when you need us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border border-white/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="heading-3 mb-4 text-white">Vetted & Insured</h3>
              <p className="text-gray-300 leading-relaxed">All drivers undergo background checks and carry full insurance.</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border border-white/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="heading-3 mb-4 text-white">Quick Response</h3>
              <p className="text-gray-300 leading-relaxed">Get a driver within minutes through our streamlined platform.</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border border-white/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="heading-3 mb-4 text-white">Real-time Tracking</h3>
              <p className="text-gray-300 leading-relaxed">Track your driver's location and estimated arrival time.</p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border border-white/10">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
              <h3 className="heading-3 mb-4 text-white">24/7 Support</h3>
              <p className="text-gray-300 leading-relaxed">Round-the-clock customer support for any questions.</p>
            </div>
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

export default Services 