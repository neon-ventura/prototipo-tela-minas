import Image from "next/image"
import Link from "next/link"
import logoimg from '../../../../public/logo.png'
import styles from './Navbar.module.css'
import "@/app/globals.css";

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <Image src={logoimg} className={styles.logoimg}></Image>
            <div className={styles.div}>
                <select>
                    <option>Produtos</option>
                    <option>Option</option>
                    <option>Option</option>
                    <option>Option</option>
                </select>
                <Link href="/About">Sobre nós</Link>
                <Link href="#">Projetos</Link>
                <Link href="#">Contate nos</Link>
            </div>
        </nav>
    )
}