import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="dark:border-white"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" color="white" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
