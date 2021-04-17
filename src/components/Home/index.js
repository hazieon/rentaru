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
    image={"/images/photos (10).jpg"} 
    alt={"ecycle community member"}
    text={"We are a renting marketplace for everyday people. Neighbours in your local community come here to rent out and borrow items to save money and purchase less. Each time you borrow an item, you are helping the planet by consuming less."}
    buttonText={"About Us"}
    />

    <Gallery tileData={tileData}/>
   
   <h2 className={styles.explainTitle}>How it works</h2>
   <div className={styles.explainBox}>
   <div>
   <img className={styles.explainImage} id={styles.explainImageOne}  src="https://c8.alamy.com/comp/2E2BNAM/what-do-you-think-about-this-happy-bearded-man-holding-steaming-iron-home-domestic-duties-mature-brutal-hipster-use-modern-technology-household-concept-guy-ironing-diligently-home-appliances-2E2BNAM.jpg" alt="man holding iron"></img>
   <h4>1. Find and reserve useful items near you!</h4>
   </div>
   <div>
   <img className={styles.explainImage}  id={styles.explainImageTwo} src="https://c7.alamy.com/comp/KGN5WJ/blond-woman-with-hat-gardening-KGN5WJ.jpg"></img>
   <h4>2. Rent useful items from your neighbours!</h4>
   </div>
   <div>
   <img  className={styles.explainImage} id={styles.explainImageThree} src="https://c7.alamy.com/comp/2BBXPPC/human-hands-holding-the-planet-earth-elements-of-this-image-are-furnished-by-nasa-2BBXPPC.jpg"></img>
   <h4>3. Contribute to preventing unnecessary waste.</h4>
   </div>
    </div>
    
    </div>
  );
}

export default Homepage;


