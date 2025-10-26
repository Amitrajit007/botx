// import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
function Chat({ msg, sender }) {
  const IsAI = sender === "AI";

  return (
    <div
      className={`flex text-white items-center ${IsAI ? "justify-start pl-10" : "justify-end pr-10"} p-[0.4rem]`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[65%] ${IsAI ? "bg-slate-500" : "bg-stone-700"}`}
      >
        <ReactMarkdown>{msg}</ReactMarkdown>
      </div>
    </div>
  );
}
export default Chat;
