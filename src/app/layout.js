import "./globals.css";

import { Inter } from "next/font/google";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GoogleRecaptchaWrapper from "@/app/GoogleRecaptchaWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jewelry and Loan",
  description: "",
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleRecaptchaWrapper>
          <Nav/>
          <main>
              {children}
          </main>
          <Footer/>
          <div id="portal"/>
      </GoogleRecaptchaWrapper>
      </body>
    </html>
  );
}
