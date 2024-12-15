import { useState } from "react";
import Layout from "./Layout";

const MyDay = ({ messages, updateMessages }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()){
      const newMessages = [...messages, message];
      updateMessages(newMessages);
      setMessage("")
    }
  }

  return(
    <Layout 
      title={"My Day"}
      messages={messages}
      inputValue={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
      backgroundImg={"./assets/myday-bg.jpg"}
    />
  )
}

export default MyDay;