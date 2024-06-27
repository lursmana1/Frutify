"use client";
import styles from "./buynow.module.css";
import { fruits } from "../../public/CONSTS/Fruit";
import { useParams, useSearchParams } from "next/navigation";
import Button from "../components/Button/Button";
const BuyNow = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name"); // Get the 'name' query parameter

  console.log(name); // Should log 'Goris Apple'
  const myFruit: any = fruits.filter((fruit) => fruit.name === name);
  console.log(myFruit);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.fruitImage}>
        <img src={myFruit[0].image} alt="xili" />
        <div className={styles.iconsWrapper}>
          <div className={styles.iconWrapper}>
            <img src={"/images/pen.svg"} />
          </div>
          <div className={styles.iconWrapper}>
            <img src={"/images/trash.svg"} />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.nameAndDescription}>
            <div className={styles.name}>{myFruit[0].name}</div>
            <div className={styles.descriptionText}>
              {myFruit[0].description}
            </div>
          </div>
          <div className={styles.price}>{myFruit[0].price}</div>
        </div>
        <div className={styles.button}>
          <Button text="Buy Now" />
        </div>
      </div>
    </div>
  );
};
export default BuyNow;
