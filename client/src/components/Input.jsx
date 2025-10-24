import React, { useState, useContext } from "react";
import axios from "axios";
import { MessageContext } from "./MessagesContext";

export default function Input() {
  const { messages, setMessages } = useContext(MessageContext);
  const [input, setInput] = useState("");
  const [isused, setIsUsed] = useState(false);

  // handle the AI response
  async function sendPrompt() {
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        Prompt:
          input +
          " Take 60 words maximum to reply and preferable if u can keep the reply as small as u can ,dont say the instructions in reply.",
      });
      const Reply = response.data.reply;
      // console.log(response.data.reply);
      setMessages([
        ...messages,
        { msg: input, sender: "user" },
        { msg: `${Reply}`, sender: "AI" },
      ]);
    } catch (err) {
      console.error(
        "Error found at the react sendPromt function in Input.jsx, Error is: ",
        err.message || err,
      );
    }
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleSubmissionClick() {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { msg: input, sender: "user" },
      { msg: "Ai is typying....", sender: "AI" },
    ]);
    setInput("");
    setIsUsed(true);
    // console.log(messages);
  }

  function handleFirstsubmit() {
    if (isused) return;
    if (!input.trim() === "") {
      setIsUsed(true);
    }
  }
  return (
    <div className="absolute w-screen h-screen z-100">
      <div
        className={` absolute w-full transition-all duration-500  ${isused ? "bottom-8" : "top-1/2 transform -translate-y-1/2"} flex justify-center items-center flex-col gap-1`}
      >
        <div
          className={`flex flex-col justify-center items-center ${isused ? "hidden" : ""}`}
        >
          <p className="text-3xl text-amber-100">Where should we begin?</p>
          <p className=" text-amber-100">powered by LLaMA3 model via Olama</p>
        </div>

        <div
          className={`z-50 flex w-full gap-1 justify-center items-center  ${isused ? "mt-20 fixed bottom-3.5" : "mt-3"}`}
        >
          <input
            className={`bg-slate-800 focus:outline-none focus:ring-1 focus:ring-red-500 w-[70%] text-white flex justify-center items-center border-2 p-2 rounded-2xl px-4 max-w-[62rem]`}
            type="text"
            name=""
            id=""
            placeholder="Ask anything..."
            value={input}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              (handleFirstsubmit(), handleSubmissionClick(), sendPrompt())
            }
            onChange={handleInputChange}
          />
          <button
            className="text-black text-center bg-red-100 p-2 px-3 rounded-3xl ml-1"
            type="submit"
            onClick={() => {
              handleFirstsubmit();
              handleSubmissionClick();
              sendPrompt();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
