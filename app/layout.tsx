import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import localFont from 'next/font/local';

export const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ]
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Zymer Fernando - Web Developer",
  description: "Portfolio of Zymer Fernando, Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sfPro.className} ${poppins.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
