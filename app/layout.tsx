import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import AuthProvider from "@/components/AuthProvider"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import 'photoswipe/dist/photoswipe.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Houslvania | find the perfect house",
  description: "find your dream rental property",
  keywords:'rental,find rentals, find properties'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalProvider>
          <AuthProvider>
       <html lang="en">
      <body>
        <Navbar />
        

        
        <main>
          {children}
        </main>
        <Footer/>
        <ToastContainer />
      </body>
    </html>
    
    </AuthProvider>
   
    </GlobalProvider>
    
  );
}
