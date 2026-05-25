import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://travel.alessandronovais.com.br"),

  verification: {
  google: 'rCGFlsGHnheXu5B2X7QGCY-L-SOTtJwr-eINedUMMRw',
},

  title: "Passagens, roteiros e viagens personalizadas | alenovaisTravel",

  description:
    "Planejamento personalizado de viagens, passagens aéreas, hotéis, roteiros e suporte completo para viajar com tranquilidade.",

  openGraph: {
    title: "Passagens, roteiros e viagens personalizadas | alenovaisTravel",

    description:
      "Planejamento personalizado de viagens, passagens aéreas, hotéis, roteiros e suporte completo para viajar com tranquilidade.",

    url: "https://travel.alessandronovais.com.br",

    siteName: "alenovaisTravel",

    images: [
      {
        url: "https://travel.alessandronovais.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "assagens, roteiros e viagens personalizadas | alenovaisTravel",
      },
    ],

    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "assagens, roteiros e viagens personalizadas | alenovaisTravel",

    description:
      "Planejamento personalizado de viagens, passagens aéreas, hotéis, roteiros e suporte completo para viajar com tranquilidade.",

    images: [
      "https://travel.alessandronovais.com.br/og-image.jpg",
    ],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XT83Q0Y1F2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-XT83Q0Y1F2');
          `}
        </Script>


<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];

    t=b.createElement(e);
    t.async=!0;
    t.src=v;

    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)

    }(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '2494866420927592');
    fbq('track', 'PageView');
  `}
</Script>

      </body>
    </html>
  );
}