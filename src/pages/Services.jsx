import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Van & Car Driver Staffing",
      description: "Temporary and permanent drivers for deliveries, courier routes, logistics runs, and commercial transport needs. We provide both commercial and private hire options.",
      variant: "primary",
      features: ["Temporary and permanent placements", "Commercial and private hire options", "Flexible scheduling options"],
      link: "/hire-driver"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Last-Minute Driver Cover",
      description: "Standby drivers ready for urgent and emergency shifts. Same-day driver dispatch to fill staffing gaps and ensure your operations continue smoothly.",
      variant: "accent",
      features: ["Same-day dispatch available", "24/7 emergency response", "Pre-vetted standby drivers"],
      link: "/hire-driver"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: "Dedicated Driver Placement",
      description: "Long-term driver placements for businesses needing regular support. Tailored matching with full compliance checks and ongoing support.",
      variant: "yellow",
      features: ["Long-term commitments", "Tailored driver matching", "Ongoing support and monitoring"],
      link: "/hire-driver"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      title: "Driver Compliance Checks",
      description: "Comprehensive driver vetting including licenses, insurance, background checks, right to work verification, and ongoing compliance monitoring.",
      variant: "primary",
      features: ["License verification", "Background checks", "Right to work verification"],
      link: "/contact"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      title: "Corporate Driver Supply",
      description: "Comprehensive driver solutions for e-commerce, retail chains, construction supply, and B2B delivery needs. Scalable solutions for large operations.",
      variant: "accent",
      features: ["E-commerce delivery solutions", "Retail chain logistics", "Scalable fleet solutions", "Dedicated account management"],
      link: "/hire-driver"
    }
  ]

  return (
    <div className="animate-fade-in">
      <HeroSection 
        title="Our Services"
        subtitle="Comprehensive driver solutions tailored to your business needs"
        description="From temporary cover to long-term placements, we provide professional drivers for all your transportation needs."
        primaryButton={{ text: "Get Started", link: "/hire-driver" }}
        secondaryButton={{ text: "Learn More", link: "/contact" }}
      />

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-yellow-500/20"></div>
        </div>

        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gradient-primary mb-6">
              Our Premium Services
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Comprehensive driver staffing solutions tailored to your specific needs. 
              From corporate transportation to emergency services, we've got you covered.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
          
          {/* Corporate Service - Full Width */}
          <div className="mt-12">
            <ServiceCard 
              {...services[4]} 
              className="animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gradient-primary mb-6">
              How It Works
            </h2>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Simple, fast, and reliable driver staffing process
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <span className="text-2xl font-bold text-text-primary">1</span>
              </div>
              <h3 className="heading-3 text-text-primary mb-2">Contact Us</h3>
              <p className="text-text-secondary">Get in touch with your requirements</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="heading-3 text-text-primary mb-2">We Match</h3>
              <p className="text-text-secondary">We find the perfect driver for your needs</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="heading-3 text-text-primary mb-2">Driver Arrives</h3>
              <p className="text-text-secondary">Professional driver ready to work</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <span className="text-2xl font-bold text-text-primary">4</span>
              </div>
              <h3 className="heading-3 text-text-primary mb-2">Ongoing Support</h3>
              <p className="text-text-secondary">We're here throughout the process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-yellow-500/20"></div>
        </div>

        <div className="container-modern relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific driver staffing requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/hire-driver" 
                className="btn-accent text-lg px-8 py-4 shadow-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Request a Quote
              </Link>
              <Link 
                to="/contact" 
                className="btn-glass text-lg px-8 py-4 hover:bg-white/30 transition-all duration-300"
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