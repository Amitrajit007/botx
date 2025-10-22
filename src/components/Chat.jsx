// import React, { useEffect, useState, useRef } from "react";

function Chat({ msg, sender }) {
  const IsAI = sender === "AI";

  return (
    <div
      className={`flex  items-center ${IsAI ? "justify-start pl-10" : "justify-end pr-10"} p-[0.4rem]`}
    >
      <div
        className={`px-4 py-2 rounded-2xl max-w-[65%] ${IsAI ? "bg-slate-500" : "bg-stone-700"}`}
      >
        <p className="text-white text-[1.2rem]">{msg}</p>
      </div>
    </div>
  );
}
export default Chat;
