import type { Metadata } from "next";
import { Inter, Roboto, Nunito, Poppins } from "next/font/google";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from "../components/Header"
import { AuthProvider } from "@/contexts";
import Auth from "@/components/Auth";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Blogger - Next.js",
  description: "Simple blog application by MERN stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                  <AuthProvider>
                    <Header />
                    <main className="container py-5">{children}</main>
                  </AuthProvider>
            </body>
        </html>
    );
}
