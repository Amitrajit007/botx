import React, { useContext } from "react";
import { MessageContext } from "./MessagesContext.jsx";
import Chat from "./Chat";
export default function RenderChat() {
  const { messages } = useContext(MessageContext);

  // ! render data
  return (
    <>
      {messages.map((data, index) => (
        <Chat key={index} msg={data.msg} sender={data.sender} />
      ))}
    </>
  );
}
