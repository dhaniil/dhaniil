import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
const defaultUrl = process.env.NEXT_PUBLIC_APP_URL
  ? `https://${process.env.NEXT_PUBLIC_APP_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Laznology - Kodenee Programinyaan",
  description: "%s | Laznology Portfolio",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      <body className={`${geistSans.className} antialiased bg-background min-h-screen`}>
        {/* @ts-expect-error Server Component - next-themes is not yet fully typed for app router */}

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="min-h-screen py-4 px-2 md:py-6 md:px-4 lg:py-8 lg:px-8">
            <div className="max-w-full border rounded-md border-border">
              <div className="p-4">
                <Navbar />
              </div>
              <main className="border-t border-border p-4 md:p-6 lg:p-8 flex justify-center items-center">
                {children}
              </main>
              <Toaster position="bottom-center" richColors />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
