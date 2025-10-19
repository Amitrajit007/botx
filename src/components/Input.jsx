import React, { useState } from "react";

export default function Input() {
  const [isused, setisUsed] = useState(false);

  function handleFirstsubmit() {
    if (isused) return;
    setisUsed(true);
  }
  return (
    <div className="absolute w-screen h-screen z-100">
      <div
        className={` absolute w-full transition-all duration-500  ${isused ? "bottom-8" : "top-1/2 transform -translate-y-1/2"} flex justify-center items-center flex-col gap-1`}
      >
        <div
          className={`flex flex-col justify-center items-center ${isused ? "hidden" : ""}`}
        >
          <p className="text-3xl text-amber-100">Welcome!</p>
          <p className=" text-amber-100">
            I am still in development , but you can try it
          </p>
        </div>

        <div
          className={`flex w-full gap-1 justify-center items-center ${isused ? "mt-0" : "mt-3"}`}
        >
          <input
            className={`bg-slate-800 focus:outline-none focus:ring-1 focus:ring-red-500 w-[70%] text-white flex justify-center items-center border-2 p-2 rounded-2xl px-4 max-w-[62rem]`}
            type="text"
            name=""
            id=""
            placeholder="Ask anything..."
            onKeyDown={(e) => e.key === "Enter" && handleFirstsubmit()}
          />
          <button
            className="text-black text-center bg-red-100 p-2 px-3 rounded-3xl ml-1"
            type="submit"
            onClick={handleFirstsubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
