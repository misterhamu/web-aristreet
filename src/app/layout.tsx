import "./globals.scss";

export const metadata = {
  title: "Aristreet | Web Developer",
  description: "Empowering businesses, amplifying brands, and connecting people through the art of web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
