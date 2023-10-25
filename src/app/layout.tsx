import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anotado",
  description:
    "Anotado é um pequeno projeto, usado como material de apoio para o Workshop de testes automatizados, feito em react que tem como principal funcionalidade guardar anotações.",
    icons: {
     icon: "/favicon.ico",
    }
    
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
