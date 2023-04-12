export const metadata = {
  title: "Tweet RSC Demo",
  description: "Demo app for the Tweet RSC library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
