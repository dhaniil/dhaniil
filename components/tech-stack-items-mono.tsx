import React from 'react';
import { Icon } from '@iconify/react';

interface TechStackItemMonoProps {

  icon: string;
  description?: string;
}

const TechStackItemMono: React.FC<TechStackItemMonoProps> = ({ icon}) => {
  return (
    <div className="transition-all duration-300 group hover:scale-110">
      <div className="flex-shrink-0 w-12 h-12 bg-white/10 border border-gray-400/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
        <Icon 
          icon={icon} 
          className="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" 
          style={{ 
            filter: 'grayscale(100%) contrast(1.2)',
            color: '#4a5568'
          }}
        />
      </div>
    </div>
  );
};

export default TechStackItemMono;