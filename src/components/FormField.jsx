import { useState } from 'react';

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error = null,
  success = null,
  disabled = false,
  className = "",
  icon = null
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (type === 'password' && showPassword) return 'text';
    return type;
  };

  const getStatusIcon = () => {
    if (error) {
      return (
        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      );
    }
    if (success) {
      return (
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className={`mb-6 ${className}`}>
      {/* Label */}
      <label 
        htmlFor={name}
        className={`block text-sm font-semibold text-text-primary mb-3 ${error ? 'text-red-400' : ''} ${success ? 'text-green-400' : ''}`}
      >
        {label}
        {required && <span className="text-accent-400 ml-1">*</span>}
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Icon (if provided) */}
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary/60">
            {icon}
          </div>
        )}

        {/* Input Field */}
        <input
          type={getInputType()}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 rounded-xl text-text-primary placeholder-text-secondary/60 
            focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 
            transition-all duration-300
            ${icon ? 'pl-10' : ''}
            ${type === 'password' ? 'pr-12' : ''}
            ${getStatusIcon() ? 'pr-10' : ''}
            ${error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : 'border-white/20'}
            ${success ? 'border-green-400 focus:border-green-400 focus:ring-green-400/30' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${isFocused && !error && !success ? 'border-white/40' : ''}
          `}
        />

        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary/60 hover:text-text-secondary transition-colors"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}

        {/* Status Icon */}
        {getStatusIcon() && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {getStatusIcon()}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-2 flex items-center space-x-2 text-red-400 text-sm animate-slide-up">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mt-2 flex items-center space-x-2 text-green-400 text-sm animate-slide-up">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{success}</span>
        </div>
      )}
    </div>
  );
};

export default FormField; 