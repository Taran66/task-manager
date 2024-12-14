import { useState } from "react";
import Layout from "./Layout";

const Important = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()){
      setMessages([...messages, message])
      setMessage("")
    }
  }
  return(
    <Layout 
      title={"Important"}
      messages={messages}
      inputValue={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >

    </Layout>
  )

}

export default Important;