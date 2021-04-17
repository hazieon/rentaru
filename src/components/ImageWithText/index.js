import styles from "./index.module.css"

function ImageWithText({image, alt, text, buttonText}) {
  return (
    <div className={styles.imageWithText}>
       <img className={styles.image} 
       src={image} 
       alt={alt}/>
       <div className={styles.textBox}>
       <p className={styles.text}>{text}</p>
        <button class={styles.heroButton}>{buttonText}</button>
        </div>
    </div>
  );
}

export default ImageWithText;
