import { FC } from 'react'
import Logo from '../../ui/Logo/Logo'
import LinkWithCounter from '../../ui/LinkWithCounter/LinkWithCounter'
import styles from './Header.module.scss'

const Header: FC = () => {
    return <header className={styles.header}>
        <Logo />
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <LinkWithCounter icon='/icons/heart.svg' to='/' counter={0} />
                </li>
                <li className={styles.link}>
                    <LinkWithCounter icon='/icons/cart.svg' to='/cart' counter={1} />
                </li>
            </ul>
        </nav>
    </header>
}

export default Header