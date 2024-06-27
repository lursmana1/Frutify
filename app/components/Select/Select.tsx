import React from "react";
import styles from "./Select.module.css";
const Select = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}>
          <option value="price-high-to-low">Price high to low</option>
          <option value="price-low-to-high">Price low to high</option>
          <option value="newest-first">Newest first</option>
          <option value="oldest-first">Oldest first</option>
        </select>
      </div>
    </div>
  );
};
export default Select;
