import { FC } from 'react'
import { Iproduct } from '../../../interfaces/product.interface'
import Title from '../../ui/Title/Title'
import Price from '../../ui/Price/Price'
import Rate from '../../ui/Rate/Rate'
import styles from './ProductCard.module.scss'

const ProductCard: FC<Iproduct> = ({ id, img, name, price, rating }) => {
    return <div className={styles.card}>
        <img src={img} alt={`Фото ${name}`} className={styles.img} />
        <div className={styles.line}>
            <Title className={styles.title} level={3}>{name}</Title>
            <Price price={price}></Price>
        </div >
        <div className={styles.line}>
            <Rate rate={rating} />
            <button className={styles.button}>Купить</button>
        </div>

    </div >
}

export default ProductCard