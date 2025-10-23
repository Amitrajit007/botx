import React, { useState } from "react";

import logo from "../assets/logo.webp";

export default function Header() {
  return (
    <header className="sticky top-0 bg-slate-900 flex items-center justify-center gap-2 py-2 shadow-md z-10">
      <img src={logo} alt="Logo" width={30} height={30} />
      <h3 className="text-white text-lg font-semibold">BotX</h3>
    </header>
  );
}
