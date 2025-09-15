import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "My App",
  description: "Login dengan Google",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}