import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "WikiRocket",
  description: "Find all the information you want from wikipedia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Nav />
        {children}
      </body>
    </html>
  );
}
