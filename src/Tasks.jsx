import { useState } from "react";
import Layout from "./Layout";

const Tasks = ({ messages, updateMessages }) => {
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
      title={"Tasks"}
      messages={messages}
      inputValue={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
      backgroundImg={"./assets/tasks-bg.jpg"}
    />
  )
}

export default Tasks;