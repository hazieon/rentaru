import React from 'react';
import styles from "./index.module.css"
import imageQR from "../../images/QR.png"

export default function Thankyou() {
  return (
    <div className={styles.thankyou}>
    <h1>Thank you for contributing to the circular economy! 🌎</h1>
   
   <h3>Your collection code:</h3>
   <div>
       <img className={styles.QR} src={imageQR} alt="rental QR code"/>
   </div>
   
    </div>
  );
} 
