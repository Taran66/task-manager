import React from 'react'
import { useState } from 'react'
import MyDay from './MyDay'
import Tasks from './Tasks'
import Important from './Important'

const ComponentRender2 = () => {
    const [activeComponent, setActiveComponent] = useState('A')

    const handleButtonClick = (component) => {
        setActiveComponent(component)
    }

  return (
        <div className='flex h-screen'>
            <div className='flex flex-col bg-black text-white gap-5 w-1/5'>
                <button className={`p-5 ${activeComponent === 'A' ? 'bg-gray-800' : 'bg-black'}`} onClick={() => handleButtonClick('A')}>
                    My Day
                </button>
                <button className={`p-5 ${activeComponent === 'B' ? 'bg-gray-800' : 'bg-black'}`} onClick={() => handleButtonClick('B')}>
                    Tasks
                </button>
                <button className={`p-5 ${activeComponent === 'C' ? 'bg-gray-800' : 'bg-black'}`} onClick={() => handleButtonClick('C')}>
                    Important
                </button>
            </div>
            <div className='w-full'>
                {activeComponent === 'A' && <MyDay />}
                {activeComponent === 'B' && <Tasks />}
                {activeComponent === 'C' && <Important />}
            </div>
        </div>
  )
}

export default ComponentRender2