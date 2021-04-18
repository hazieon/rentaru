import styles from "./index.module.css"
import {
  Link
} from "react-router-dom";


function ImageWithText({image, alt, head, text, buttonText,link}) {
  return (
    <div className={styles.imageWithText}>
       
       <div className={styles.textBox}>
       <h3>{head}</h3>
       <p className={styles.text}>{text}</p>
        
       <Link className={styles.link} to={link}>
         <button class={styles.heroButton}>
           {buttonText}</button>
      </Link>        
        </div>
        <img className={styles.image} 
       src={image} 
       alt={alt}/>
    </div>
  );
}

export default ImageWithText;
