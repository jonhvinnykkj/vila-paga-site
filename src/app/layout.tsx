import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vila Pagã | Uma Semente de Magia no Coração do Piauí",
  description:
    "Um refúgio místico no coração do Piauí dedicado às tradições pagãs, espiritualidade e conexão com a natureza. Rituais, celebrações, trilhas sagradas e muito mais.",
  keywords: [
    "Vila Pagã",
    "paganismo",
    "Piauí",
    "espiritualidade",
    "natureza",
    "rituais",
    "wicca",
    "bruxaria",
    "sabbats",
  ],
  authors: [{ name: "Vila Pagã" }],
  openGraph: {
    title: "Vila Pagã | Uma Semente de Magia no Coração do Piauí",
    description:
      "Um refúgio místico dedicado às tradições pagãs, espiritualidade e conexão com a natureza.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
