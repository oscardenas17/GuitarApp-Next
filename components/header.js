import Image from "next/image";
import Link from "next/link";
import styles from "../src/styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src="/img/logo.svg" alt="logo" width={300} height={40} />

        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
      </div>
    </header>
  );
}
