"use client";
import { DM_Sans } from "next/font/google";
import Navbar from "./components/common/Navbar";
import { FooterBottomContainer } from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsAppButton";
import "aos/dist/aos.css";
import "./globals.css";
import "./swiper-override.css";
import { useEffect } from "react";
import Aos from "aos";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Analytics from "./components/Analytics";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--dm-sans",
});

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  // re‑scan for new data‑aos elements on every navigation
  useEffect(() => {
    Aos.refresh();
  }, [pathname]);

  return (
    <html lang='en'>
      <head>
         {/* Google tag (gtag.js) */}
         {GA_ID ? (
          <>
            <Script
              id="ga4-src"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
        <title>Ivo Solutions</title>
        <link rel='icon' href='/logos/logo_small.svg' sizes='any' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='IVO Solutions, a Tanzanian company established in 2015, specializes in data center IT services. It offers an array of cloud computing solutions, serving as a one-stop shop for comprehensive data center services.'
        />
        <meta property='og:title' content='Ivo Solutions' />
        <meta
          property='og:description'
          content='IVO Solutions, a Tanzanian company established in 2015, specializes in data center IT services. It offers an array of cloud computing solutions, serving as a one-stop shop for comprehensive data center services.'
        />
        <meta property='og:image' content='/logos/logo_small.svg' />
        <meta property='og:url' content='https://www.ivosolutions.co.tz/' />
        <link rel='canonical' href='https://www.ivosolutions.co.tz' />
        <meta name='author' content='param' />
        <meta
          name='keywords'
          content='Ivo Solutions, Cloud solutions, Infrastructure Solutions, Network Solutions'
        />
      </head>

      <body className={dmSans.className}>
        {!pathname.includes("/portal") && <Navbar />}
        <Analytics />
        {children}
        {!pathname.includes("/portal") && (
          <>
            <FooterBottomContainer />
            <WhatsAppButton />
          </>
        )}
      </body>
    </html>
  );
}
