import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakash Singh — AI Engineer & Software Developer",
  description:
    "Portfolio of Prakash Singh — software engineer focused on AI engineering, Generative AI, backend systems, APIs and practical software development.",
  keywords: [
    "Prakash Singh",
    "AI Engineer",
    "Software Developer",
    "Python",
    "FastAPI",
    "MCP",
    "ML"
  ],
  authors: [{ name: "Prakash Singh" }],
  openGraph: {
    title: "Prakash Singh — AI Engineer & Software Developer",
    description:
      "Building practical AI and software systems. Portfolio of Prakash Singh.",
    url: "https://prakashsingh.dev",
    siteName: "Prakash Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Singh — AI Engineer & Software Developer",
    description:
      "Building practical AI and software systems. Portfolio of Prakash Singh.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light')}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-noise" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
