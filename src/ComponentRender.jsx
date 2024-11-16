import React, { useState } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

const ComponentRender = () => {
  // State to track which component is shown
  const [activeComponent, setActiveComponent] = useState('A');

  // Handle button click to set the active component
  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='flex h-screen  '>
      {/* Buttons to toggle between components */}
      <div className='flex flex-col bg-black text-white gap-5 w-1/5'>
      <button className={`${activeComponent === 'A' ? 'bg-gray-200' : 'bg-black'}`} onClick={() => handleButtonClick('A')}>
        Show Component A
      </button>
      <button className={`${activeComponent === 'B' ? 'bg-gray-200' : 'bg-black'}`} onClick={() => handleButtonClick('B')}
        >Show Component B
      </button>
      <button className={`${activeComponent === 'C' ? 'bg-gray-200' : 'bg-black'}`} onClick={() => handleButtonClick('C')}>
        Show Component C
      </button>
      </div>

      {/* Conditional rendering based on active component */}
      <div className='w-full'>
        {activeComponent === 'A' && <ComponentA />}
        {activeComponent === 'B' && <ComponentB />}
        {activeComponent === 'C' && <ComponentC />}
      </div>
    </div>
  );
};

export default ComponentRender;
