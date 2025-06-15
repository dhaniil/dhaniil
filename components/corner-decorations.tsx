import React from 'react';

interface CornerDecorationsProps {
  className?: string;
  borderColor?: string;
}

export default function CornerDecorations({ 
  className = "", 
  borderColor = "border-slate-200/50" 
}: CornerDecorationsProps) {
  return (
    <>
      <div className={`absolute top-4 left-4 w-10 h-10 border-l-4 border-t-4 ${borderColor} opacity-70 z-10 ${className}`}></div>
      <div className={`absolute top-4 right-4 w-10 h-10 border-r-4 border-t-4 ${borderColor} opacity-70 z-10 ${className}`}></div>
      <div className={`absolute bottom-4 left-4 w-10 h-10 border-l-4 border-b-4 ${borderColor} opacity-70 z-10 ${className}`}></div>
      <div className={`absolute bottom-4 right-4 w-10 h-10 border-r-4 border-b-4 ${borderColor} opacity-70 z-10 ${className}`}></div>
    </>
  );
}
