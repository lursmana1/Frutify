import styles from './DiscountCard.module.css'
type Props = {
    productName : string
}
const DiscountCard = (props : Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.font}>
                <span className={styles.offer}>Special Offer for </span>
                <span className={styles.name}>{props.productName}</span>
            </div>
            <div>
                <span className={styles.sale}>SALE</span>
            </div>
        </div>
    )
}
export default DiscountCard