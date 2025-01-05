import { Lora, Playfair_Display } from "next/font/google";
import { Footer, Header } from "@/components/organisms";
import "./globals.css";

const lora = Lora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Casey O'Neill",
  description: "Casey O'Neill is a graduate student at the University of Waterloo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${playfairDisplay.className} antialiased bg-primary font-body text-dark`}>
        <div className="flex flex-col h-screen bg-light">
          <Header />
          <div className="flex-1 pb-10 w-full bg-light">
            <main className="px-5 md:px-10 mx-auto container">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
