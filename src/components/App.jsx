import GlowingBackground from "./Background.jsx";
import Input from "./Input.jsx";
import Chat from "./Chat.jsx";
import Reply from "./Reply.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

function App() {
  const messages = [
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
  ];
  // ! render toda date
  const renderChat = messages.map((data, index) => (
    <Chat key={index} msg={data.msg} sender={data.sender}></Chat>
  ));
  return (
    <main className=" min-h-screen">
      <GlowingBackground />
      <Header></Header>
      <Input></Input>
      {renderChat}
    </main>
  );
}

export default App;
