import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "AR LUMIN | Hub Criativo",
  description: "Multiverso de jogos, livros e experiências digitais por Aleex Lima"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="antialised bg-lumin-black text-lumin-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}