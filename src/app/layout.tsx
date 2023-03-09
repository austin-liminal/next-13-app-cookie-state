import Image from "next/image";
import "./globals.css";

import styles from "./layout.module.css";

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
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
