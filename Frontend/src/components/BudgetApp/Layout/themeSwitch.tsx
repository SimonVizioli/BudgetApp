import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/ui/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center space-x-2 my-2">
            <Label htmlFor="theme-switch">
                <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
                <Moon className="hidden h-5 w-5 dark:block" />
            </Label>
            <Switch
                id="theme-switch"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
        </div>
    );
}
