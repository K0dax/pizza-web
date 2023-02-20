import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "@/contexts/AuthContent";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src="/logo.svg" width={190} height={60} alt="logo" />
        </Link>

        <nav className={styles.MenuNav}>
          <Link legacyBehavior href="/category">
            <a className={styles.link}>Categoria</a>
          </Link>
          <Link legacyBehavior href="/product">
            <a className={styles.link}>Cardápio</a>
          </Link>
          <button onClick={signOut} className={styles.logout}>
            <FiLogOut color="#fff" size={22} />
          </button>
        </nav>
      </div>
    </header>
  );
}
