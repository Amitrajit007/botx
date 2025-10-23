import React, { useContext, useEffect, useRef } from "react";
import { MessageContext } from "./MessagesContext.jsx";
import Chat from "./Chat";

export default function RenderChat() {
  const { messages } = useContext(MessageContext);
  const chatEndRef = useRef(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ! render data
  return (
    <div className="flex flex-col flex-1 overflow-y-auto pb-42">
      {messages.map((data, index) => (
        <Chat key={index} msg={data.msg} sender={data.sender} />
      ))}
      <div ref={chatEndRef} />{" "}
      {/*dummy div its at the end cause it sends the scrollIntoView int the last div*/}
    </div>
  );
}
