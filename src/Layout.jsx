
import DropdownMenu from "./DropdownMenu"

const Layout = ({ title, messages, onSubmit, inputValue, onChange }) => {
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
      backgroundImage: "url('./assets/bg-image.jpg')",
      backgroundSize: "cover", // Makes the image cover the entire div
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      minHeight: "100vh", // Ensures it covers the full viewport height
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
            <div className="flex items-center p-5 w-full h-10 text-white  bg-white/10 rounded-lg backdrop-blur-md border border-white/20 placeholder-white/70 shadow-lg outline-none">
              {msg}
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} >
        <input 
        // className="w-full outline-none p-2 bg-gray-500"
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