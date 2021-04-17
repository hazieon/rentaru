import styles from "./index.module.css"

function Homepage() {
  return (
    <div className="Homepage">
        <div class={styles.heroImage}>
            <div class={styles.heroText}>
             <h1>Extraordinary people</h1>
            <h2>doing extraordinary things.</h2>
             <button class={styles.heroButton}>Explore nearby</button>
             </div>
        </div> 
    

    <img className={styles.aboutImage} src={"/images/earth.png"} alt="ecycle community member"/>
    </div>
  );
}

export default Homepage;


