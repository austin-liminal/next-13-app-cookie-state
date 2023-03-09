import { PrimaryNavLink } from "./nav-link";
import styles from "./nav.module.css";

export const PrimaryNav = () => {
  return (
    <>
      <h1 className="heading">Next 13 Client-Server State Sharing Demo</h1>
      <nav className={styles.primaryNav}>
        <PrimaryNavLink
          href="/1-in-memory"
          text="1) In-Memory Only (No sharing, No SSR)"
        />
        <PrimaryNavLink
          href="/2-localstorage"
          text="2) Localstorage Persistence (No SSR)"
        />
        <PrimaryNavLink
          href="/3-cookies"
          text="3) Cookie Persistence (Sharing + SSR!)"
        />
      </nav>
    </>
  );
};
