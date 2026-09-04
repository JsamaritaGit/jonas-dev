import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TitleBar from "@/components/vscode/TitleBar";
import SidePanel from "@/components/vscode/SidePanel";
import EditorTabs from "@/components/vscode/EditorTabs";
import StatusBar from "@/components/vscode/StatusBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "jonas.dev — Visual Studio Code",
  description: "A VS Code-inspired Next.js app with tabs for navigation and a sidebar for content.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="h-screen overflow-hidden bg-editor font-sans text-fg">
        {/* VS Code shell */}
        <div className="flex h-full flex-col">
          <TitleBar />

          <div className="flex min-h-0 flex-1">
            {/* Left side: activity bar + sidebar */}
            <SidePanel />

            {/* Editor area: tab navigation + the current page */}
            <div className="flex min-w-0 flex-1 flex-col">
              <EditorTabs />
              <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>

          <StatusBar />
        </div>
      </body>
    </html>
  );
}
