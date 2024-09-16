import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CircleElasticMouse from "@/components/theme-and-mouse/circle-elastic-mouse";
import LoadingWrapper from "@/components/theme-and-mouse/loading-wrapper";
import StarMouse from "@/components/theme-and-mouse/star-mouse";
import ThemeSwitch from "@/components/theme-and-mouse/theme-switch";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ReactGA from "react-ga";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Babina | Personal Portfolio",
  description: "Babina Gurung is a fullstack developer",
};

const TRACKING_ID = "G-QLH6WCE1L3";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem]  -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LoadingWrapper>
              <Header></Header>
              <StarMouse></StarMouse>
              <CircleElasticMouse></CircleElasticMouse>
              {children}
              <Footer></Footer>
              <ThemeSwitch></ThemeSwitch>
              <CTA></CTA>
              {/* <FloatingNav></FloatingNav> */}
              <Toaster position="top-right"></Toaster>
            </LoadingWrapper>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
