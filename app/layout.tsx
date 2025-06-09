import type { Metadata } from "next";
import { Geist, Antonio, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Laznology - Kodenee Programinyaan",
  description: "%s | Laznology Portfolio",
};

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${antonio.variable} ${jetBrainsMono.variable} antialiased bg-background min-h-screen`}>
        {/* @ts-expect-error Server Component - next-themes is not yet fully typed for app router */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="h-screen py-4 px-2 md:py-6 md:px-4 lg:py-8 lg:px-8 flex flex-col">
            <div className="flex-1 border rounded-xl border-border flex flex-col overflow-hidden relative">
              <div className="p-4 bg-background border-b border-border flex-shrink-0">
                <Navbar />
              </div>
              <main className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto scrollable-content">
                  {children}
                </div>
              </main>
              <Footer />
              <Toaster position="bottom-center" richColors />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
