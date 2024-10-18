import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';



const openSans = Open_Sans({
  subsets: ["latin"]
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Elix Solution Sdn. Bhd.",
  description: "Elix Solution Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        <div>
          {children}
         </div>
         <Footer /> 
      </body>
    </html>
  );
}
