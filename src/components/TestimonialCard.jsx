import { useState } from 'react';

const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  rating = 5, 
  image = null,
  featured = false,
  variant = "default"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: {
      cardClass: "card-glass",
      textClass: "text-gray-800",
      quoteClass: "text-blue-600"
    },
    featured: {
      cardClass: "card-glass border-blue-500/30 ring-2 ring-blue-500/20",
      textClass: "text-gray-800",
      quoteClass: "text-blue-600"
    },
    dark: {
      cardClass: "card-dark",
      textClass: "text-white",
      quoteClass: "text-blue-400"
    }
  };

  const currentVariant = variants[featured ? 'featured' : variant];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      className={`relative ${currentVariant.cardClass} p-8 group cursor-pointer transition-all duration-500 ${
        featured ? 'scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Featured Review
          </div>
        </div>
      )}

      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1">
            {renderStars(rating)}
          </div>
          <span className={`ml-2 text-sm font-medium ${currentVariant.textClass === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
            {rating}.0 out of 5
          </span>
        </div>

        {/* Quote */}
        <blockquote className={`text-lg leading-relaxed mb-6 italic ${currentVariant.textClass} relative`}>
          <span className={`absolute -left-2 -top-2 text-4xl ${currentVariant.quoteClass} opacity-30`}>"</span>
          {content}
          <span className={`absolute -right-2 -bottom-2 text-4xl ${currentVariant.quoteClass} opacity-30`}>"</span>
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Author Info */}
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold ${currentVariant.textClass} truncate`}>
              {name}
            </p>
            <p className={`text-sm ${currentVariant.textClass === 'text-white' ? 'text-gray-400' : 'text-gray-500'} truncate`}>
              {role}
            </p>
            {company && (
              <p className={`text-sm ${currentVariant.textClass === 'text-white' ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                {company}
              </p>
            )}
          </div>

          {/* Verification Badge */}
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isHovered ? 'bg-gradient-to-br from-blue-500/5 to-purple-500/5' : ''
      }`}></div>

      {/* Floating Elements */}
      <div className={`absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-500 ${
        isHovered ? 'animate-pulse-glow' : 'opacity-50'
      }`}></div>
      <div className={`absolute bottom-4 right-4 w-1 h-1 bg-purple-400 rounded-full transition-all duration-500 ${
        isHovered ? 'animate-pulse-glow' : 'opacity-50'
      }`} style={{ animationDelay: '0.5s' }}></div>

      {/* Gradient Border on Hover */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
        isHovered ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20' : ''
      }`}></div>
    </div>
  );
};

export default TestimonialCard; 