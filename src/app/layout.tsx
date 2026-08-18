import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import ButtonEffects from "@/components/ButtonEffects";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
  description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK, including Construction, Engineering, Logistics, Healthcare and Education Staff.",
  openGraph: {
    title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
    description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK, including Construction, Engineering, Logistics, Healthcare and Education Staff.",
    type: "website",
    images: [
      {
        url: "https://rd1.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "Recruitment Direct UK Ltd Logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Recruitment Agency Scotland & UK | Recruitment Direct UK Ltd",
    description: "Recruitment Direct UK supplies temporary, contract and permanent staff across Scotland and the UK, including Construction, Engineering, Logistics, Healthcare and Education Staff.",
    images: ["https://rd1.co.uk/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PWQ7VMJC');`
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${openSans.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWQ7VMJC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>
          {children}
          <ButtonEffects />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
