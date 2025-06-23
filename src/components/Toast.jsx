import { useState, useEffect } from 'react';

const Toast = ({ 
  message, 
  type = "info", 
  duration = 5000, 
  onClose, 
  position = "top-right" 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const types = {
    success: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      bgClass: "bg-green-50 border-green-200",
      textClass: "text-green-800",
      iconClass: "text-green-500"
    },
    error: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      bgClass: "bg-red-50 border-red-200",
      textClass: "text-red-800",
      iconClass: "text-red-500"
    },
    warning: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      bgClass: "bg-yellow-50 border-yellow-200",
      textClass: "text-yellow-800",
      iconClass: "text-yellow-500"
    },
    info: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      bgClass: "bg-blue-50 border-blue-200",
      textClass: "text-blue-800",
      iconClass: "text-blue-500"
    }
  };

  const positions = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2"
  };

  const currentType = types[type];

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positions[position]} z-50 animate-slide-up`}>
      <div className={`
        ${currentType.bgClass} 
        ${currentType.textClass}
        border rounded-xl p-4 shadow-lg backdrop-blur-sm
        transform transition-all duration-300
        ${isLeaving ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'}
        max-w-sm w-full
      `}>
        <div className="flex items-start space-x-3">
          {/* Icon */}
          <div className={`flex-shrink-0 ${currentType.iconClass}`}>
            {currentType.icon}
          </div>

          {/* Message */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">
              {message}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1">
          <div 
            className={`h-1 rounded-full transition-all duration-300 ease-linear ${
              type === 'success' ? 'bg-green-500' :
              type === 'error' ? 'bg-red-500' :
              type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            }`}
            style={{ 
              width: isLeaving ? '0%' : '100%',
              transition: isLeaving ? 'width 0.3s ease-out' : `width ${duration}ms linear`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast; 