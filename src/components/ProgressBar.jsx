import React from 'react'

const ProgressBar = ({ 
  progress = 0, 
  total = 100, 
  className = "", 
  showPercentage = true,
  animated = true,
  color = "accent"
}) => {
  const percentage = Math.min((progress / total) * 100, 100)
  
  const colorClasses = {
    accent: "bg-gradient-to-r from-accent-500 to-accent-600",
    yellow: "bg-gradient-to-r from-yellow-500 to-yellow-600",
    primary: "bg-gradient-to-r from-primary-500 to-primary-600",
    green: "bg-gradient-to-r from-green-500 to-green-600"
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary">Progress</span>
        {showPercentage && (
          <span className="text-sm text-text-secondary">{Math.round(percentage)}%</span>
        )}
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div 
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            animated ? 'animate-pulse' : ''
          } ${colorClasses[color]}`}
          style={{ 
            width: `${percentage}%`,
            transition: animated ? 'width 0.5s ease-out' : 'none'
          }}
        >
          {/* Shimmer Effect */}
          {animated && (
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          )}
        </div>
      </div>
      
      {/* Progress Text */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-text-secondary">
          Step {progress} of {total}
        </span>
        <span className="text-xs text-text-secondary">
          {progress}/{total} completed
        </span>
      </div>
    </div>
  )
}

export default ProgressBar 