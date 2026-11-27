import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketly",
  description: "A simple e-commerce storefront",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
