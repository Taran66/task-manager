

const ComponentA = () => {
  return (
    <div
    className=""
    style={{
      backgroundImage: "url('./assets/bg-image.jpg')",
      backgroundSize: "cover", // Makes the image cover the entire div
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents the image from repeating
      minHeight: "100vh", // Ensures it covers the full viewport height
    }}
    >
      <div className="flex flex-col justify-between h-screen items-center">
        <div>

        </div>
        <input 
        type="text"
        // className="w-full outline-none p-2 bg-gray-500"
        placeholder='Try typing "Pay bill by 10pm"'
        className="p-4 text-white bg-white/10 rounded-xl backdrop-blur-md border border-white/20 placeholder-white/70 shadow-lg outline-none w-11/12 mb-10 "
        />
        
      </div>
    </div>
  )
}

export default ComponentA