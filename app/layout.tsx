import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const title = "CodeNut Documentation - AI Web3 Builder - Ship Code, Go Nuts";
const description =
  "Build full-stack DApps you like, on any chain, by vibing with AI. CodeNut makes Web3 development accessible to everyone.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | CodeNut",
  },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-light.svg",
        href: "/logo-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
  description,
  keywords: [
    "AI web3 builder",
    "no-code development",
    "web development",
    "AI coding assistant",
    "website creation",
    "application builder",
    "code generation",
    "developer tools",
    "smart contract",
    "Ethereum",
    "DApps",
  ],
  authors: [{ name: "CodeNut Team" }],
  creator: "CodeNut",
  publisher: "CodeNut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://docs.codenut.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "https://docs.codenut.ai",
    siteName: "CodeNut",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeNut - Ship Code, Go Nuts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@codenut_ai",
    site: "@codenut_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={lato.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
