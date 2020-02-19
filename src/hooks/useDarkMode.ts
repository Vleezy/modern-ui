import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  // Get dark mode setting from localStorage
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage(
    "dark-theme",
    null
  );

  // Attach 'mode-dark' class to HTML element
  const applyTheme = (value: boolean): void => {
    value
      ? document.documentElement.classList.add("mode-dark")
      : document.documentElement.classList.remove("mode-dark");
  };

  const setDarkMode = (value: boolean) => {
    setStoredDarkMode(value);
    applyTheme(value);
  };

  return [storedDarkMode, setDarkMode];
};
