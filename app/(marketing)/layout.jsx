import "../globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@components/shared/top-bar.component";
import LeftSideBar from "@components/shared/left-side-bar.component";
import RightSideBar from "@components/shared/right-side-bar.component";
import BottomBar from "@components/shared/bottom-bar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main className="flex">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
