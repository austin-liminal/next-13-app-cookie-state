import "../globals.css";
import { getServerTheme } from "@/core/server/theme";
import { PrimaryNav } from "../nav";

export const metadata = {
  title: "Next 13 Cookie State Sharing",
  description:
    "An example comparing different approaches to using state from the client, on the server, using Next 13 app dir and React Server Components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getServerTheme();
  return (
    <html lang="en" data-theme={theme}>
      <body>
        <main className="main">
          <PrimaryNav />
          {children}
        </main>
      </body>
    </html>
  );
}
