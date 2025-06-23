import React, { useState, useEffect } from 'react'

const VideoBackground = ({ 
  videoSrc, 
  fallbackImage, 
  className = "", 
  overlay = true,
  children 
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)

  useEffect(() => {
    if (videoSrc) {
      const video = document.createElement('video')
      video.src = videoSrc
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true))
      video.addEventListener('error', () => setIsVideoError(true))
    }
  }, [videoSrc])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {videoSrc && !isVideoError && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
          onLoadStart={() => setIsVideoLoaded(false)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image */}
      {(!videoSrc || isVideoError) && fallbackImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}

      {/* Gradient Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/60 to-primary-900/80" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-500/6 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default VideoBackground 