
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import AuthProvider from "@/components/AuthProvider"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import { GlobalProvider } from "@/context/GlobalContext";
import 'photoswipe/dist/photoswipe.css';
export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Houslvania | find the perfect house",
  description: "find your dream rental property",
  keywords:'rental,find rentals, find properties'
};

export default function RootLayout({
  children,
}) {
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
