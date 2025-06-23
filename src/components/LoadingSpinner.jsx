import { useState, useEffect } from 'react';

const LoadingSpinner = ({ 
  size = "md", 
  variant = "primary", 
  text = "Loading...",
  showText = true,
  className = ""
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variantClasses = {
    primary: 'border-blue-600',
    secondary: 'border-gray-600',
    accent: 'border-green-600',
    white: 'border-white'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} loading-spinner ${variantClasses[variant]} mb-2`}></div>
      {showText && (
        <p className="text-sm text-gray-600 animate-pulse">
          {text}{dots}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner; 