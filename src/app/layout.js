import { Inter, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/Themecontext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "MindWave Blog ",
  description:
    "MindWave Blog offers in-depth articles and thought-provoking discussions on technology, creativity, and innovation. Explore a wide range of topics and stay ahead with the latest trends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSerifText.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
