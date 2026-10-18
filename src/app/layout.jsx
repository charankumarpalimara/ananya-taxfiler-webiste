import { Plus_Jakarta_Sans, Outfit, Rubik } from "next/font/google";
import Script from "next/script";
import "../index.css";
import { Providers } from "./providers";
import ClientShell from "../components/ClientShell";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://ananyataxco.com"),
  title: {
    default: "Ananya Tax Co | Professional Bookkeeping, Payroll & Tax Services",
    template: "%s | Ananya Tax Co",
  },
  description:
    "Ananya Tax Co provides expert CPA tax preparation, bookkeeping, payroll, and strategic consulting for businesses and individuals.",
  keywords: [
    "Ananya Tax Co",
    "CPA tax filing",
    "tax preparation services",
    "online tax return",
    "small business accounting",
    "personal tax preparation",
    "bookkeeping services",
    "payroll processing",
    "IRS tax compliance",
    "business tax returns",
    "tax refund optimization",
  ],
  authors: [{ name: "Ananya Tax Co" }],
  creator: "Ananya Tax Co",
  publisher: "Ananya Tax Co",
  icons: {
    icon: "/new-logo.jpeg",
    apple: "/new-logo.jpeg",
  },
  openGraph: {
    title: "Ananya Tax Co | Professional Bookkeeping, Payroll & Tax Services",
    description:
      "Expert tax filing, bookkeeping, and payroll services backed by experienced CPAs and tax professionals.",
    url: "https://ananyataxco.com",
    siteName: "Ananya Tax Co",
    images: [
      {
        url: "/new-logo.jpeg",
        width: 1254,
        height: 1254,
        alt: "Ananya Tax Co Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Tax Co | Professional Bookkeeping, Payroll & Tax Services",
    description:
      "Expert tax filing, bookkeeping, and payroll services backed by experienced CPAs and tax professionals.",
    images: ["/new-logo.jpeg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Ananya Tax Co",
    url: "https://ananyataxco.com",
    logo: "https://ananyataxco.com/new-logo.jpeg",
    description:
      "Ananya Tax Co provides trusted CPA tax preparation, bookkeeping, payroll, and strategic consulting for businesses and individuals.",
    priceRange: "$$",
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${rubik.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="T3PBf9nkE0FQoiYYQnRJ7A"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-white text-text-dark font-sans antialiased selection:bg-brand-accent/20 selection:text-brand-primary">
        <Providers>
          <ClientShell>{children}</ClientShell>
        </Providers>
      </body>
    </html>
  );
}
