import { Lora, Playfair_Display } from "next/font/google";
import { Footer, Header } from "@/components/organisms";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Casey O'Neill" />
      </head>
      <body className={`${lora.className} ${playfairDisplay.className} bg-primary font-body antialiased`}>
        <ThemeProvider attribute="class">
          <div className="flex h-screen flex-col text-dark dark:text-light">
            <Header />
            <div className="w-full flex-1 bg-light pb-10 dark:bg-dark">
              <main className="container mx-auto px-5 md:px-10">{children}</main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
