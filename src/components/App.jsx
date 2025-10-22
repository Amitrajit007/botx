// Background
import GlowingBackground from "./Background.jsx";
// components
import Input from "./Input.jsx";
import Chat from "./Chat.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

import RenderChat from "./RenderChat.jsx";

// Provider
import { MessageProvider } from "./MessagesProvider.jsx";

function App() {
  return (
    <main className=" min-h-screen">
      <GlowingBackground />
      <MessageProvider>
        <Header></Header>
        <Input></Input>
        <RenderChat />
      </MessageProvider>
    </main>
  );
}

export default App;
