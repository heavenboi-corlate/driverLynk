import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  features = [], 
  variant = "primary",
  className = "" 
}) => {
  const variants = {
    primary: {
      gradient: "from-primary-900 to-primary-800",
      hoverGradient: "from-primary-800 to-primary-700",
      iconBg: "bg-primary-100",
      iconColor: "text-primary-900"
    },
    accent: {
      gradient: "from-accent-500 to-accent-600",
      hoverGradient: "from-accent-600 to-accent-700",
      iconBg: "bg-accent-100",
      iconColor: "text-accent-600"
    },
    yellow: {
      gradient: "from-yellow-500 to-yellow-600",
      hoverGradient: "from-yellow-600 to-yellow-700",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  };

  // Fallback to primary if variant is undefined or invalid
  const currentVariant = variants[variant] || variants.primary;

  return (
    <div className={`group relative ${className}`}>
      {/* Glass Card */}
      <div className="card-hover h-full p-8 relative overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentVariant.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Glass Effect */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className={`w-16 h-16 ${currentVariant.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <div className={`w-8 h-8 ${currentVariant.iconColor}`}>
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="heading-3 text-text-primary mb-4 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            
            <p className="body-medium text-text-secondary mb-6 leading-relaxed">
              {description}
            </p>

            {/* Features List */}
            {features.length > 0 && (
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-text-secondary">
                    <div className={`w-2 h-2 ${currentVariant.iconColor} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <Link
              to={link}
              className={`inline-flex items-center text-sm font-semibold ${currentVariant.iconColor} group-hover:translate-x-1 transition-transform duration-300`}
            >
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentVariant.hoverGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
      </div>

      {/* Floating Elements */}
      <div className={`absolute -top-2 -right-2 w-4 h-4 ${currentVariant.iconColor} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
      <div className={`absolute -bottom-2 -left-2 w-3 h-3 ${currentVariant.iconColor} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
    </div>
  );
};

export default ServiceCard; 