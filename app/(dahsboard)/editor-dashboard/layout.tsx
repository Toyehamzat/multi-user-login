import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editor dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
