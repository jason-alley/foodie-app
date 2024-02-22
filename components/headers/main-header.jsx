import Link from "next/link"

import logo from "@/assets/logo.png";
import styles from "./main-header.module.css"
export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <img src={logo.src} alt="A plate with delicious food." width={100} />
                NextLevel Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}