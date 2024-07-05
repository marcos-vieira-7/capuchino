import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Geral.module.css';

export default function Navbar() {

    return(

        <nav className={styles.navbar}>
            <div>
                <Image
                src="/images/pokeball.png"
                width="30"
                height="30"
                alt="PokeNext"
                />
            </div>
            <ul className={styles.lista_itens}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}