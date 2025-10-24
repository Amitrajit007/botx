import React, { useState } from "react";

import { MessageContext } from "./MessagesContext";
export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}
