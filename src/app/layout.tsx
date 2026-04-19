import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: 'Villa Burger Interlagos | Hamburgueria Artesanal em Hortolândia', description: 'A melhor hamburgueria artesanal de Hortolândia. Lanches generosos, ambiente familiar e sabor irresistível. Peça online ou venha nos visitar no Jardim Interlagos!', openGraph: { title: 'Villa Burger Interlagos | Hamburgueria Artesanal', description: 'Hambúrgueres artesanais de qualidade em Hortolândia. Atendimento nota 1000 e ambiente aconchegante.', type: 'website' } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
