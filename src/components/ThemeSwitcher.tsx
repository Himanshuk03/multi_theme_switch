import { useTheme, type Theme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="rounded px-2 py-1 text-sm bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 transition"
      aria-label="Theme Switcher"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="colorful">Colorful</option>
    </select>
  );
};

export default ThemeSwitcher;
