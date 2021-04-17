import styles from "./index.module.css"
import ImageWithText from "../ImageWithText"
import Gallery from "../Gallery"
import {tileData} from "../../tileData"
import image3 from "../../images/photos (3).jpg"
import image10 from "../../images/photos (10).jpg"
import {
  Link
} from "react-router-dom";


function Homepage() {
  return (
    <div className="Homepage">
        <div class={styles.heroImage}>
            <div class={styles.heroText}>
             <h1>Extraordinary people</h1>
            <h2>renting extraordinary things.</h2>
             <button class={styles.heroButton}>  
             <Link className={styles.link} 
             to="/checkout">Explore Nearby</Link>
            </button>
             </div>
        </div> 
    
    <ImageWithText 
    image={image10} 
    alt={"ecycle community member"}
    text={"We are a renting marketplace for everyday people. Neighbours in your local community come here to rent out and borrow items to save money and purchase less. Each time you borrow an item, you are helping the planet by consuming less."}
    buttonText={"About Us"}
    />

    <Gallery tileData={tileData} cols={4}/>
   
   <h2 className={styles.explainTitle}>How it works</h2>
   <div className={styles.explainBox}>
   <div>
   <img className={styles.explainImage} id={styles.explainImageOne}  src="https://c8.alamy.com/comp/2E2BNAM/what-do-you-think-about-this-happy-bearded-man-holding-steaming-iron-home-domestic-duties-mature-brutal-hipster-use-modern-technology-household-concept-guy-ironing-diligently-home-appliances-2E2BNAM.jpg" alt="man holding iron"></img>
   <h4>1. Find and reserve useful items near you!</h4>
   </div>
   <div>
   <img className={styles.explainImage}  id={styles.explainImageTwo} src="https://c7.alamy.com/comp/KGN5WJ/blond-woman-with-hat-gardening-KGN5WJ.jpg" alt="gardening woman"></img>
   <h4>2. Rent useful items from your neighbours!</h4>
   </div>
   <div>
   <img  className={styles.explainImage} id={styles.explainImageThree} src={image3} alt="gardening man"></img>
   <h4>3. Contribute to preventing unnecessary waste.</h4>
   </div>
    </div>
    
    </div>
  );
}

export default Homepage;


