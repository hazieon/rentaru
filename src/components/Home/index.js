import styles from "./index.module.css"

function Homepage() {
  return (
    <div className="Homepage">
   <div class={styles.heroImage}>
    <div class={styles.heroText}>
    <h1>Extraordinary people</h1>
    <p>doing extra ordinary things.</p>
    <button>Start Renting</button>
  </div>
</div> 
    </div>
  );
}

export default Homepage;


