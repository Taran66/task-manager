// import React from 'react'
// import { useState } from 'react'
// import MyDay from './MyDay'
// import Tasks from './Tasks'
// import Important from './Important'

// const ComponentRender2 = () => {
//     const [activeComponent, setActiveComponent] = useState('A')

//     const handleButtonClick = (component) => {
//         setActiveComponent(component)
//     }

//   return (
//         <div className='flex h-screen'>
//             <div className='flex flex-col bg-black text-white gap-5 w-1/5'>
//                 <button className={`p-5 ${activeComponent === 'A' ? 'bg-gray-800' : 'bg-black'}`} onClick={() => handleButtonClick('A')}>
//                     My Day
//                 </button>
//                 <button className={`p-5 ${activeComponent === 'B' ? 'bg-gray-800' : 'bg-black'}`} onClick={() => handleButtonClick('B')}>
//                     Tasks
//                 </button>
//                 <button className={`p-5 ${activeComponent === 'C' ? 'bg-gray-800' : 'bg-black'}`} onClick={() => handleButtonClick('C')}>
//                     Important
//                 </button>
//             </div>
//             <div className='w-full'>
//                 {activeComponent === 'A' && <MyDay />}
//                 {activeComponent === 'B' && <Tasks />}
//                 {activeComponent === 'C' && <Important />}
//             </div>
//         </div>
//   )
// }

// export default ComponentRender2


import React, { useState } from 'react'
import MyDay from './MyDay'
import Tasks from './Tasks'
import Important from './Important'

const ComponentRender2 = () => {
    const [activeComponent, setActiveComponent] = useState('A')
    // Lift the messages state up to this parent component
    const [myDayMessages, setMyDayMessages] = useState([])
    const [tasksMessages, setTasksMessages] = useState([])
    const [importantMessages, setImportantMessages] = useState([])

    const handleButtonClick = (component) => {
        setActiveComponent(component)
    }

    // Create update functions to modify messages for each component
    const updateMyDayMessages = (newMessages) => {
        setMyDayMessages(newMessages)
    }

    const updateTasksMessages = (newMessages) => {
        setTasksMessages(newMessages)
    }

    const updateImportantMessages = (newMessages) => {
        setImportantMessages(newMessages)
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
                {activeComponent === 'A' && (
                    <MyDay 
                        messages={myDayMessages}
                        updateMessages={updateMyDayMessages}
                    />
                )}
                {activeComponent === 'B' && (
                    <Tasks 
                        messages={tasksMessages}
                        updateMessages={updateTasksMessages}
                    />
                )}
                {activeComponent === 'C' && (
                    <Important 
                        messages={importantMessages}
                        updateMessages={updateImportantMessages}
                    />
                )}
            </div>
        </div>
  )
}

export default ComponentRender2