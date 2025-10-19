import GlowingBackground from "./Background.jsx";
import Input from "./Input.jsx";
import UserChat from "./UserChat.jsx";
import Reply from "./Reply.jsx";

function App() {
  return (
    <main className=" min-h-screen">
      <GlowingBackground />
      <Input></Input>
      <UserChat></UserChat>
      <Reply></Reply>
    </main>
  );
}

export default App;
