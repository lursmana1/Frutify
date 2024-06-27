import styles from './Button.module.css'
type Props = {
    text: string
}
const Button = (props : Props) => {
  return (
    <div className={styles.fruitBuyNow}>
      <span className={styles.buyNowText}>{props.text}</span>
    </div>
  );
};
export default Button
