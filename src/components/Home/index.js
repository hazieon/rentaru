import styles from "./index.module.css"
import ImageWithText from "../ImageWithText"
import Gallery from "../Gallery"
import {tileData} from "../../tileData"

function Homepage() {
  return (
    <div className="Homepage">
        <div class={styles.heroImage}>
            <div class={styles.heroText}>
             <h1>Extraordinary people</h1>
            <h2>renting extraordinary things.</h2>
             <button class={styles.heroButton}>Explore nearby</button>
             </div>
        </div> 
    
    <ImageWithText 
    image={"/images/earth.png"} 
    alt={"ecycle community member"}
    text={"We are a renting marketplace for everyday people. Neighbours in your local community come here to rent out and borrow items to save money and purchase less. Each time you borrow an item, you are helping the planet by consuming less."}
    buttonText={"About Us"}
    />

    <Gallery tileData={tileData}/>
   
    </div>
  );
}

export default Homepage;


