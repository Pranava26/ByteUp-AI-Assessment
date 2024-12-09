import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "ByteUp AI Assessment",
  description: "ByteUp AI Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${roboto.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
