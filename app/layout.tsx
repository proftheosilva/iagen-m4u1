import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Módulo 4 · Unidade 1 | Agentes Autônomos e Raciocínio Encadeado",
  description:
    "Página didática de apoio aos alunos do Curso de Formação em IA Generativa — CucandoTI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
