import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <LoadingSpinner size="lg" variant="primary" text="Loading..." />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

const LoadingSpinner = ({ size = "md", variant = "primary", text = "Loading..." }) => {
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
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} loading-spinner ${variantClasses[variant]} mb-2`}></div>
      <p className="text-sm text-gray-600 animate-pulse">{text}</p>
    </div>
  );
};

export default PageTransition; 