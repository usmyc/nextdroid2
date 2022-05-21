import About from "../pages/about";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image
            className={styles.img}
            src="/logo.jpeg"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/droidlist">
        <a>Droid List</a>
      </Link>
    </nav>
  );
}
