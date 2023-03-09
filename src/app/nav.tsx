import { PrimaryNavLink } from "./nav-link";
import styles from "./nav.module.css";

export const PrimaryNav = () => {
  return (
    <nav className={styles.primaryNav}>
      <PrimaryNavLink href="/1-in-memory" text="1) In-Memory Only" />
      <PrimaryNavLink
        href="/2-localstorage"
        text="2) Localstorage Persistence"
      />
      <PrimaryNavLink href="/3-cookies" text="3) Cookie Persistence" />
    </nav>
  );
};
