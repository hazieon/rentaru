import PaymentForm from "../Payment"
import styles from "./index.module.css"
import image13 from "../../images/photos (13).jpg"
import {
  Link
} from "react-router-dom";


function Checkout({rentable}) {
  console.log(rentable)
  return (
    <>
    <div  className={styles.imageBox}>
    
    <img className={styles.productImage} src={rentable.img} alt="your rental product"/>
    <div className={styles.productDataBox}>
    <h3>Your product: {rentable.item}</h3>
    <h4>Rental length: <span className={styles.spanText}>4 days</span></h4>
    <h4>Price per day: <span className={styles.spanText}>£2.50  </span> <s id={styles.discount}> £3.99</s></h4>
    <h4>KGs saved from landfill:<span className={styles.spanText}> 2kg</span></h4>

    </div>
    </div>

    <div className="checkout">
      <h2>Start your Rental!</h2>
      <PaymentForm/>
    </div>
    <button className={styles.submit}>  <Link className={styles.link} 
             to="/thankyou">Submit </Link></button>
    </>
  );
}

export default Checkout;
