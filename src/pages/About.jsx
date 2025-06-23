import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
  const heroData = {
    title: "About DriverLynk",
    subtitle: "Your Trusted Partner",
    description: "We're revolutionizing the driver staffing industry with technology, reliability, and unmatched service quality.",
    primaryButton: {
      text: "Join Our Team",
      link: "/apply-driver"
    },
    secondaryButton: {
      text: "Hire Drivers",
      link: "/hire-driver"
    },
    backgroundImage: "/assets/images/hero/about-hero.jpg"
  }

  const values = [
    {
      icon: "🎯",
      title: "Reliability",
      description: "We maintain the highest standards of reliability for your business needs."
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships through transparency and consistent service."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Leveraging technology to streamline processes and enhance experiences."
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "Committed to excellence in every interaction and service delivery."
    }
  ]

  return (
    <div className="min-h-screen">
      <HeroSection {...heroData} />
      
      {/* Mission Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-8 text-text-primary">Our Mission</h2>
            <p className="body-large text-text-secondary mb-8 leading-relaxed">
              At DriverLynk, we're on a mission to bridge the gap between businesses and qualified drivers. 
              We believe that every business deserves reliable, professional drivers, and every driver 
              deserves fair compensation and respect.
            </p>
            <p className="body-large text-text-secondary mb-8 leading-relaxed">
              Our platform combines cutting-edge technology with human expertise to ensure the perfect 
              match between your business needs and our driver capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-grid opacity-10"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Our Values</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationships with drivers and clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="heading-3 mb-4 text-text-primary">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-6 text-text-primary">Our Impact</h2>
            <p className="body-large text-text-secondary max-w-2xl mx-auto">
              Trusted by businesses across the UK for professional driver services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20">
              <div className="text-4xl mb-4">🚗</div>
              <div className="text-3xl font-bold text-text-primary mb-2">500+</div>
              <div className="text-text-secondary">Professional Drivers</div>
            </div>
            
            <div className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20">
              <div className="text-4xl mb-4">⭐</div>
              <div className="text-3xl font-bold text-text-primary mb-2">98%</div>
              <div className="text-text-secondary">Client Satisfaction</div>
            </div>
            
            <div className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20">
              <div className="text-4xl mb-4">🛡️</div>
              <div className="text-3xl font-bold text-text-primary mb-2">24/7</div>
              <div className="text-text-secondary">Support Available</div>
            </div>
            
            <div className="group bg-glass-card rounded-2xl p-8 text-center hover-lift transition-all duration-500 animate-fade-in-up border-2 border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <div className="text-3xl font-bold text-text-primary mb-2">50+</div>
              <div className="text-text-secondary">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="container-modern relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-1 mb-6 text-white">Join Our Mission</h2>
            <p className="body-large text-white/90 mb-8">
              Whether you're a business looking for reliable drivers or a driver seeking opportunities, 
              we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/hire-driver"
                className="bg-white text-accent-600 font-bold px-8 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                Hire Drivers
              </a>
              <a
                href="/apply-driver"
                className="bg-white/20 backdrop-blur-xl text-white font-bold px-8 py-4 rounded-xl transition-all duration-500 hover:bg-white/30 border border-white/30"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 