import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  features = [], 
  variant = "primary",
  className = "",
  badge = null,
  rating = null,
  availability = null
}) => {
  const variants = {
    primary: {
      iconBg: "bg-primary-100/20",
      iconColor: "text-primary-400",
      borderColor: "border-primary-200/20",
      accentColor: "text-primary-400",
      badgeBg: "bg-primary-100/20",
      badgeText: "text-primary-300"
    },
    accent: {
      iconBg: "bg-accent-100/20",
      iconColor: "text-accent-400",
      borderColor: "border-accent-200/20",
      accentColor: "text-accent-400",
      badgeBg: "bg-accent-100/20",
      badgeText: "text-accent-300"
    },
    yellow: {
      iconBg: "bg-yellow-100/20",
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-200/20",
      accentColor: "text-yellow-400",
      badgeBg: "bg-yellow-100/20",
      badgeText: "text-yellow-300"
    }
  };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <div className={`group relative ${className}`}>
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 hover:border-primary-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
        {/* Badge */}
        {badge && (
          <div className={`absolute top-4 right-4 ${currentVariant.badgeBg} ${currentVariant.badgeText} px-3 py-1 rounded-full text-xs font-semibold border border-white/10`}>
            {badge}
          </div>
        )}
        
        <div className="h-full flex flex-col">
          {/* Icon */}
          <div className={`w-16 h-16 ${currentVariant.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
            <div className={`text-2xl ${currentVariant.iconColor}`}>
              {icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>

            {/* Rating */}
            {rating && (
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">({rating}/5)</span>
              </div>
            )}

            {/* Availability Status */}
            {availability && (
              <div className="flex items-center mb-4">
                <div className={`w-2 h-2 rounded-full ${availability === 'Available' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                <span className="text-sm text-gray-400">{availability}</span>
              </div>
            )}

            {/* Features List */}
            {features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className={`w-2 h-2 ${currentVariant.iconColor} rounded-full mr-3 flex-shrink-0`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-auto">
            <Link
              to={link}
              className={`inline-flex items-center text-sm font-semibold ${currentVariant.accentColor} hover:text-primary-300 transition-colors duration-300`}
            >
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 