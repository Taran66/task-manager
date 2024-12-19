
import { useState } from "react";
import DropdownMenu from "./DropdownMenu"
import { FaStar } from "react-icons/fa";

const Layout = ({ title, messages, onSubmit, inputValue, onChange, backgroundImg }) => {

    const [isToggled, setIsToggled] = useState(false)
    const today = new Date()
    const formattedDate = today.toLocaleDateString('en-US',{
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    
  return (  
    <div
    className="flex justify-center"
    style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}
    >
      <div className="flex flex-col justify-between h-screen w-11/12 gap-10">
        <div className="mt-10 flex flex-row justify-between">
          <div className="text-white">
          <h1 className="text-4xl">{title}</h1>
          <p>{formattedDate}</p>
          </div>
            <DropdownMenu />
        </div>
        <div className="flex flex-col gap-5 h-full justify-between  overflow-hidden">
        <div className="flex flex-col gap-4 overflow-y-scroll">
        {messages.map((msg, index) => (
              <div 
                key={index} 
                className="flex flex-row justify-between items-center p-5 w-full text-white bg-white/10 rounded-lg backdrop-blur-md border border-white/20 placeholder-white/70 shadow-lg"
              >
                <div>
                <div>{msg.text}</div>
                {msg.hasTime && (
                  <div className="text-sm text-gray-300">
                    Reminder: {msg.timestamp.toLocaleString()}
                  </div>
                )}
                </div>
                <button 
                onClick={() => setIsToggled(!isToggled)}
                >
                <FaStar 
                  className={`${isToggled ? "text-yellow-400" : "text-gray-500"}`}
                />
                </button>
              </div>
            ))}
        </div>
        <form onSubmit={onSubmit} >
        <input 
        placeholder='Try typing "Pay bill by 10pm"'
        className="p-4 w-full  text-white bg-white/10 rounded-xl backdrop-blur-md border border-white/20 placeholder-white/70 shadow-lg outline-none mb-10 "
        value={inputValue}
        onChange={onChange}
        />
        </form>
        </div>
        
      </div>
    </div>
  )
}

    export default Layout