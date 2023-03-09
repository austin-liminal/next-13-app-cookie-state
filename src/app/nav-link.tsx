"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const PrimaryNavLink: FC<{ href: string; text: string }> = ({
  href,
  text,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`link ${isActive ? "link-active" : ""}`}>
      <h3>{text}</h3>
    </Link>
  );
};
