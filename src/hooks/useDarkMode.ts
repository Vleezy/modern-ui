import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  // Get dark mode setting from localStorage
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage(
    "dark-theme",
    null
  );

  // Attach 'mode-dark' class to HTML element
  const applyTheme = (value: boolean) => {
    value
      ? document.body.setAttribute("dark", "")
      : document.body.removeAttribute("dark");
  };

  const setDarkMode = (value: boolean) => {
    setStoredDarkMode(value);
    applyTheme(value);
  };

  return [storedDarkMode, setDarkMode];
};
