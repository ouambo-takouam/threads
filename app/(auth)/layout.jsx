import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "Threads onboarding content",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>{children}</body>
    </html>
  );
}
