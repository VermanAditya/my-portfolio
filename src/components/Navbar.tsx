import { PROFILE } from "../config";

export const Navbar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (v: string) => void;
}) => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow bg-white dark:bg-gray-800 dark:text-white fixed top-0 z-50">
      <h1 className="text-xl font-bold">{PROFILE.name}</h1>

      <div className="flex gap-6 items-center">
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#blogs" className="hover:text-blue-500">Blogs</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};
