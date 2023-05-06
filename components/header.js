import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link    href="/">
          {" "}
          <Image src="/img/logo.svg" alt="logo" width={300} height={40} />
        </Link>

        <nav className={styles.navegacion}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>
          <Link
            href="/nosotros"
            className={router.pathname === "/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>
          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/tienda"
            className={router.pathname === "/tienda" ? styles.active : ""}
          >
            Tienda
          </Link>
        </nav>
      </div>
    </header>
  );
}
