import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.TextandBurger}>
        <Link href={'/'} className={styles.headerText}>Frutify </Link>
        <div className={styles.imageWrapper}>
          <img src="/images/burger.svg" alt="burger" />
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.buttonWrapper}>
          <Link href={"/addproduct"} style={{ textDecoration: "none" }}>
            <Button text="+ Add Product" />
          </Link>
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <Button text="Shop" />
          </Link>
        </div>
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder={"Search"} />
          <img
            className={styles.searchIcon}
            src="/images/search.svg"
            alt="search"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
