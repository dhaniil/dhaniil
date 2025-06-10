import React from 'react';
import { Icon } from '@iconify/react';


interface TechStackItemProps {
  name: string;
  icon: string;
  description?: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ icon }) => {
  return (
    <div className="transition-all duration-300">
      <div className="flex-shrink-0 w-32 h-32 bg-gray-400/20 rounded-lg flex items-center justify-center opacity-70">
        <Icon 
          icon={icon} 
          className="w-24 h-24 text-gray-700" 
        />
      </div>
    </div>
  );
};

export default TechStackItem;
