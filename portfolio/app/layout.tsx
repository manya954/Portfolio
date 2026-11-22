import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manya Sinha | Computer Science Graduate",
  description: "Portfolio of Manya Sinha — Computer Science graduate with published research in AI, NLP and machine learning, and internship experience in AI and data analytics.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
