import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "600", "800"],
});

export const metadata = {
  title: "Verified ID",
  description: "SITS Verified ID",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-blue-sits-iam-dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
