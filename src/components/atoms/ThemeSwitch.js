import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
