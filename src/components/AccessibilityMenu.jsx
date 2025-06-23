import { useState, useEffect } from 'react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Apply accessibility settings
    document.documentElement.style.fontSize = 
      fontSize === 'small' ? '14px' : 
      fontSize === 'large' ? '18px' : '16px';
    
    document.documentElement.classList.toggle('high-contrast', highContrast);
    document.documentElement.classList.toggle('reduced-motion', reducedMotion);
  }, [fontSize, highContrast, reducedMotion]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Accessibility Button */}
      <button
        onClick={toggleMenu}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2"
        aria-label="Accessibility menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      </button>

      {/* Accessibility Menu */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 animate-scale-in">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Accessibility</h3>
          
          {/* Font Size */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <div className="flex space-x-2">
              {['small', 'medium', 'large'].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    fontSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={(e) => setHighContrast(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">High Contrast</span>
            </label>
          </div>

          {/* Reduced Motion */}
          <div className="mb-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={(e) => setReducedMotion(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
            </label>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setFontSize('medium');
              setHighContrast(false);
              setReducedMotion(false);
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded transition-colors"
          >
            Reset to Default
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu; 