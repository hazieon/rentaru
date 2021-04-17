import styles from "./index.module.css"
import Gallery from "../Gallery"
import {tileData} from "../../tileData"
import Sliders from "../Slider"

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
        <div className={styles.line}></div>
      <ul className={styles.categoryList}>
    {categories.map((item)=>{
      return(
        <li className={styles.categoryListItem}>{item}</li>
      )
    })}
    </ul>
    <div className={styles.galleryBox}>
      <Gallery tileData={tileData} cols={5}/>
      </div>


    <div className={styles.filterSection}>
    <h3 className={styles.filterTitle}>Filter:</h3>
    <div className={styles.line}></div>
    <p>Condition:</p>
    <select>
    <option value="Condition" disabled selected>Any</option>
    <option value="New">New</option>
    <option value="Like New">Like new</option>
    <option value="Good">Good</option>
    <option value="Does the job">Does the job</option>
    <option value="Average">Just about</option>
    </select>

<Sliders title={"Price"} min={3} max={50} initial={10} step={5}/>

<Sliders title={"Distance"} min={5} max={50} initial={10} step={5}/>


{/* <p> </p>
    <select>Price
    <option value="Price" disabled>Price per day</option>
    <option value="Price">Any</option>
    <option value="Price">£15 or more</option>
    <option value="Price">£10 or less</option>
    <option value="Price">£5 or less</option>
    <option value="Price">£3 or less</option>
    </select>
   <p></p>

   <select>Distance
    <option value="Distance" disabled>Distance per day</option>
    <option value="Distance">Any</option>
    <option value="Distance">Within 50km</option>
    <option value="Distance">Within 25km</option>
    <option value="Distance">Within 15km</option>
    <option value="Distance">Within 5km</option>
    </select>
    */}





    </div>




     
    </div>
  );
}

export default Sell;
