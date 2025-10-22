import React, { useState } from "react";

import { MessageContext } from "./MessagesContext";
export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      msg: "Good Morning Bro !!",
      sender: "user",
    },

    {
      msg: "Good Morning !!",
      sender: "AI",
    },

    {
      msg: "What is the today date!!",
      sender: "user",
    },

    {
      msg: "Today is 23rd jan",
      sender: "AI",
    },
  ]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}
