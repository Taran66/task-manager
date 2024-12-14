import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Three dots button */}
      <button
        className="text-2xl text-white hover:text-gray-400 focus:outline-none"
        onClick={toggleDropdown}
      >
        ...
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-gray-800 text-white rounded-lg shadow-lg">
          {/* Sort By Section */}
          <div className="p-3 border-b border-gray-700">
            <span className="block text-sm font-bold text-gray-300">Sort by</span>
          </div>

          {/* Theme Section */}
          <div className="p-3 border-b border-gray-700">
            <span className="block text-sm font-bold text-gray-300 mb-2">Theme</span>
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-md"
                  style={{ backgroundColor: getRandomColor() }}
                ></div>
              ))}
            </div>
          </div>

          {/* Actions Section */}
          <div className="p-3 space-y-2">
            <button className="w-full text-left text-sm text-gray-300 hover:text-white">
              Print list
            </button>
            <button className="w-full text-left text-sm text-gray-300 hover:text-white">
              Email list
            </button>
            <button className="w-full text-left text-sm text-gray-300 hover:text-white">
              Pin to Start
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Utility function to generate random colors (you can replace it with fixed colors)
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export default DropdownMenu;
