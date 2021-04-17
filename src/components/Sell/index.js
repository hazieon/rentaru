import styles from "./index.module.css"
import Gallery from "../Gallery"
import {tileData} from "../../tileData"


const categories = [
  "Electronics",
  "Home Improvement",
  "Furniture",
  "Clothing",
  "Garden",
  "Computers",
  "Bikes",
  "Sporting",
  "Tools",
  "Video Games"
]

function Sell() { 
  return (
    <div className="sell">
        <h3 className={styles.categoryTitle}>Explore by category:</h3>
      <ul className={styles.categoryList}>
    {categories.map((item)=>{
      return(
        <li className={styles.categoryListItem}>{item}</li>
      )
    })}
    </ul>


    <div>
    <h3 className={styles.filterTitle}>Filter:</h3>
    <select>Condition</select>
    </div>






      <div className={styles.galleryBox}>
      <Gallery tileData={tileData} cols={6}/>
      </div>
    </div>
  );
}

export default Sell;
