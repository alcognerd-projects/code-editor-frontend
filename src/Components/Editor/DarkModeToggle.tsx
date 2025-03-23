import useDarkMode from "../Ui/useDarkMode";

export default function DarkModeToggle() {
  const { theme, setTheme } = useDarkMode();

  return (
    <div className="flex gap-2 p-4">
      <button
        className={`p-2 rounded ${theme === "light" ? "bg-gray-200" : ""}`}
        onClick={() => setTheme("light")}>
        ☀️ Light
      </button>
      <button
        className={`p-2 rounded ${
          theme === "dark" ? "bg-gray-800 text-white" : ""
        }`}
        onClick={() => setTheme("dark")}>
        🌙 Dark
      </button>
      <button
        className={`p-2 rounded ${
          theme === "system" ? "bg-gray-400 text-white" : ""
        }`}
        onClick={() => setTheme("system")}>
        ⚙️ System
      </button>
    </div>
  );
}
