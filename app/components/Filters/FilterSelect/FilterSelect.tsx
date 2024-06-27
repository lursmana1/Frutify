import styles from "./FiltersSelect.module.css";
const FilterSelect = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}>
          <option value="price-high-to-low">All</option>
          <option value="price-low-to-high">Green</option>
          <option value="newest-first">Orange</option>
          <option value="oldest-first">Red</option>
        </select>
      </div>
    </div>
  );
};
export default FilterSelect;
