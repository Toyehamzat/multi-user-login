import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Viewer dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
