import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'light' | 'dark';
  animated?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  variant = 'light', 
  animated = true,
  className = '' 
}) => {
  const sizeClasses = {
    small: 'gap-2',
    medium: 'gap-3',
    large: 'gap-4'
  };

  const clockSizes = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10', 
    large: 'w-12 h-12'
  };

  const textSizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  const textColors = {
    light: 'text-dark',
    dark: 'text-white'
  };

  return (
    <div className={`flex items-center ${sizeClasses[size]} ${className}`}>
      {/* Logo Mark */}
      <div className="flex items-center justify-center flex-shrink-0">
        <div className={`${clockSizes[size]} ${animated ? 'spinning-clock' : 'static-clock'}`}>
          {!animated && (
            <>
              <div className="absolute w-0.5 h-3 bg-primary top-2 left-1/2 transform -translate-x-1/2" />
              <div className="absolute w-0.5 h-2 bg-accent top-3 left-1/2 transform -translate-x-1/2" />
            </>
          )}
        </div>
      </div>
      
      {/* Logo Text */}
      <div className={`font-bold ${textSizes[size]} ${textColors[variant]} whitespace-nowrap`}>
        ZER<span className="text-primary font-extrabold">0</span>BUSY
      </div>
    </div>
  );
};

export default Logo; 