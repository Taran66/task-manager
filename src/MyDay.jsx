import { useState } from "react";
import Layout from "./Layout";
import * as chrono from 'chrono-node';




const MyDay = ({ messages, updateMessages }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()){
      const parsedResult = chrono.parse(message)
      
      const task = {
        text: message,
        timestamp: parsedResult.length > 0
          ? parsedResult[0].start.date()
          : new Date(),
        originalText: message,
        hasTime: parsedResult.length > 0
      }

      const newMessages = [...messages, task];
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