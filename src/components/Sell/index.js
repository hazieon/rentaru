
import React, {useState} from "react";
import styles from "./index.module.css"
import Gallery from "../Gallery"
import {tileDataFull} from "../../tileDataFull"
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

function Sell({changeRentable}) { 
  const [text, setText] = useState("");

     
function handleInput(e) {
  setText(String(e.target.value));
}

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

    <div className={styles.search}>
      <input
        className={styles.searchBar}
        placeholder="Search for an item..."
        type="text"
        onInput={(e) => handleInput(e)}
      ></input>
      <button className={styles.searchButton}>go</button>
    </div>

    <div className={styles.filterSectionBox}>
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
  </div>

    </div>

    <div className={styles.galleryBox}>
      <Gallery tileData={tileDataFull} changeRentable={changeRentable} cols={5}/>
      </div>


    </div>
  );
}

export default Sell;
