import styles from "./CustomCheckbox.module.css";
const CustomCheckbox = () => {
  return (
    <div>
      <label className={styles.container}>
        
        <input type="checkbox" />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};
export default CustomCheckbox