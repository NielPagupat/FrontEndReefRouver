import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)); // Slight delay for smooth transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-center h-screen bg-[url('/src/assets/background.jpg')] bg-cover transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
    </>
  );
}
