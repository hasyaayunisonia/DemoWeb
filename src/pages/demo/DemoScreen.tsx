import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "../../components/ThemeToogle";
import StyledButton from "@/components/StyledButton";
import styles from "../../styles/Demo.module.css";

export default function DemoScreen() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-pink-100 dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Demo UI Components</h1>
        <ThemeToggle />
      </div>

      {/* Tabs */}
      <div className={styles.wrapper}>
        <h2 className="text-lg font-semibold mb-2">Tabs (Headless UI)</h2>
        <Tabs defaultValue="account" className="w-[300px]">
          <TabsList className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <TabsTrigger
              value="account"
              className="text-black dark:text-white aria-selected:bg-blue-100 aria-selected:text-blue-600 rounded-md px-4 py-2 transition"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="text-black dark:text-white aria-selected:bg-blue-100 aria-selected:text-blue-600 rounded-md px-4 py-2 transition"
            >
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account settings</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>

      {/* Modal */}
      <div className={styles.wrapper}>
        <h2 className="text-lg font-semibold mb-2">Modal (shadcn/ui)</h2>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Open Modal
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-white dark:bg-gray-800 text-black dark:text-white">
            <DialogHeader>
              <DialogTitle>Sample Modal</DialogTitle>
            </DialogHeader>
            <p>This is a modal content</p>
            <DialogFooter>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Dropdown */}
      <div className={styles.wrapper}>
        <h2 className="text-lg font-semibold mb-2">Dropdown (shadcn/ui)</h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Open Menu
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-gray-800 text-black dark:text-white">
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Styled-components */}
      <div className={styles.wrapper}>
        <h2 className="text-lg font-semibold mb-2">Styled Components</h2>
        <StyledButton>Styled Button</StyledButton>
      </div>
    </div>
  );
}
