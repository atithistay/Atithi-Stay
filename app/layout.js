import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import AuthProvider, { AuthContexProvider } from "./context/authContext";
import { getUserFromToken } from "./lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atithi Stay | Affordable PG in Mumbai, Pune, Nagpur & More",
  description:
    "Find top-rated Paying Guest (PG) accommodations across Mumbai with Atithi Stay. Safe, budget-friendly stays for students and working professionals in Pune, Mumbai, Nagpur, and more.",
  keywords: [
    "PG in Mumbai",
    "Paying Guest Pune",
    "PG Mumbai",
    "Affordable PG accommodation",
    "Student PG Mumbai",
    "Working professionals stay",
    "Furnished PG rooms",
    "Atithi Stay Mumbai",
    "Best PG services",
  ],
  authors: [{ name: "Atithi Stay Team", url: "https://atithistaymumbai.com" }],
  openGraph: {
    title: "Atithi Stay | Best PG in Mumbai for Students & Professionals",
    description:
      "Explore premium PG stays with Atithi Stay across Mumbai. Fully-furnished, secure, and affordable accommodations tailored for students and professionals.",
    url: "https://atithistaymumbai.com",
    siteName: "Atithi Stay",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atithi Stay | Affordable PG in Mumbai",
    description:
      "Discover trusted PG accommodation for students and professionals in Mumbai with Atithi Stay.",
  },
};

export default async function RootLayout({ children }) {
  const user = getUserFromToken(); // server-side
  const auth = { isLoggedIn: !!user, user };
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider initialAuth={auth}>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
