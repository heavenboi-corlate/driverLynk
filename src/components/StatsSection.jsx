import { useState, useEffect, useRef } from 'react';

const StatsSection = ({ 
  stats = [], 
  title = "Our Impact",
  subtitle = "Delivering exceptional results across the UK",
  variant = "default",
  showAnimation = true
}) => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const variants = {
    default: {
      bgClass: "gradient-light",
      textClass: "text-gray-800",
      cardClass: "card-glass"
    },
    dark: {
      bgClass: "gradient-dark",
      textClass: "text-white",
      cardClass: "card-dark"
    },
    primary: {
      bgClass: "gradient-primary",
      textClass: "text-white",
      cardClass: "card-glass"
    }
  };

  const currentVariant = variants[variant];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && showAnimation) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats(
          stats.map((stat, index) => {
            const targetValue = stat.value;
            const currentValue = Math.floor(targetValue * progress);
            return currentValue;
          })
        );

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedStats(stats.map(stat => stat.value));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible, stats, showAnimation]);

  return (
    <section 
      ref={sectionRef}
      className={`relative py-20 lg:py-32 overflow-hidden ${currentVariant.bgClass}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className={`text-responsive-3xl lg:text-5xl font-bold mb-6 ${currentVariant.textClass}`}>
            {title}
          </h2>
          <p className={`text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${currentVariant.textClass === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${currentVariant.cardClass} p-8 text-center group cursor-pointer transition-all duration-500 hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              {stat.icon && (
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                  <div className="text-white text-2xl">
                    {stat.icon}
                  </div>
                </div>
              )}

              {/* Number */}
              <div className={`text-4xl lg:text-5xl font-bold mb-4 ${currentVariant.textClass} group-hover:text-blue-600 transition-colors duration-300`}>
                {showAnimation ? animatedStats[index] : stat.value}
                {stat.suffix && (
                  <span className="text-2xl lg:text-3xl ml-1">{stat.suffix}</span>
                )}
              </div>

              {/* Label */}
              <h3 className={`text-lg font-semibold mb-2 ${currentVariant.textClass}`}>
                {stat.label}
              </h3>

              {/* Description */}
              {stat.description && (
                <p className={`text-sm ${currentVariant.textClass === 'text-white' ? 'text-white/70' : 'text-gray-600'}`}>
                  {stat.description}
                </p>
              )}

              {/* Progress Bar */}
              {stat.progress && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{stat.progress}%</p>
                </div>
              )}

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-50 group-hover:animate-pulse-glow transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-50 group-hover:animate-pulse-glow transition-all duration-500" style={{ animationDelay: '0.5s' }}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-slide-up">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${currentVariant.textClass === 'text-white' ? 'bg-white/10' : 'bg-blue-50'} backdrop-blur-sm border ${currentVariant.textClass === 'text-white' ? 'border-white/20' : 'border-blue-200'}`}>
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className={`text-sm font-medium ${currentVariant.textClass}`}>
              Trusted by leading companies across the UK
            </span>
          </div>
        </div>
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-texture"></div>
    </section>
  );
};

export default StatsSection; 