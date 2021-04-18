import styles from "./index.module.css"
import Form from 'react-bootstrap/Form'
import Sliders from "../Slider"

function List() {
  return (
    <div className={styles.listContainer}>
       <h2>List your rentable item:</h2>
    <div className={styles.panel}>
     <span className={styles.span}>Upload some photos:</span>
    <p> </p>
    <Form>
     <Form.Group>
     <Form.File id="exampleFormControlFile1" />
     </Form.Group>
    </Form>
    <section className={styles.photoBox}>
    <div className={styles.photo}>
        <p>📷</p>
    </div>
    <div className={styles.photo}>
        <p></p>
    </div>
    <div className={styles.photo}>
        <p></p>
    </div>
    <div className={styles.photo}>
        <h3>＋</h3>
    </div>
    </section>
    </div>
    <div className={styles.panel}>
    <span className={styles.span}>Set your price:</span>
    <Sliders title={"Price per day in British pounds"} min={1} max={100} initial={10} step={1}/>
    <p> </p>
    <span className={styles.span}>List the item's condition:</span>
    <Sliders title={"Condition from usable to perfect"} min={1} max={100} initial={10} step={1}/> 

   </div>
   <div className={styles.panel}>
    <Form>
    <span className={styles.span}>Your Email Address:</span>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="waffleLover@email.com" />
  </Form.Group>
  </Form>
    </div>
    <div className={styles.panel}>
    <Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
  <span className={styles.span}>Other information about this Rentable</span>
     <p> </p>
     <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</div>
    
    
    </div>

    
  );
}

export default List;
