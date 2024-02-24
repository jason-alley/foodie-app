import Link from "next/link"
import Image from "next/image"

import logo from "@/assets/logo.png";
import styles from "./main-header.module.css"
export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image 
                    src={logo}
                    priority
                    alt="A plate with delicious food." 
                />
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