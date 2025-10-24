import logo from "../assets/logo.webp";

export default function Header() {
  return (
    <header className="sticky top-0 bg-slate-900  flex flex-row items-center justify-center gap-2 py-2 shadow-md z-10">
      <div className="flex gap-1">
        <img src={logo} alt="Logo" width={30} height={30} />
        <h3 className="text-white text-lg font-semibold">BotX</h3>
      </div>
      <a // fix this
        href="https://github.com/Amitrajit007"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white opacity-50 text-[0.9rem]"
      >
        GitHub
      </a>
    </header>
  );
}
