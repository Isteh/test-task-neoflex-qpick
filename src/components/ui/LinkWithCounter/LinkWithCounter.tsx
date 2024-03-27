import { FC } from 'react'
import { ILinkWithCounterProps } from './LinkWithCounter.interface'
import { Link } from 'react-router-dom'
import styles from './LinkWithCounter.module.scss'

const LinkWithCounter: FC<ILinkWithCounterProps> = ({ counter, icon, ...props }) => {
    return <Link {...props} className={styles.link}>
        <img src={icon} className={styles.img} />
        {counter > 0 && <span className={styles.counter}>
            {counter}
        </span>}
    </Link>
}

export default LinkWithCounter