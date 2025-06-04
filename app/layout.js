import { Poppins } from "next/font/google";
import AppShell from "./components/AppShell";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Docs | DBDash",
  description: "Documentation for DBDash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-50 h-screen flex flex-col ${poppins.className}`}
      >
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
