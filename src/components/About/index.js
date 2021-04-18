import styles from "./index.module.css"
import pythonData from "../../images/Scotland-2005-2019.png"

function About() {
  return (
    <div className={styles.about}>
       <h2>The Data</h2>
   <div className={styles.imageBox}>
    <img   className={styles.dataImg} src={pythonData} alt="Scotland waste data 2005-2019. Household waste biggest contributor"/>
    <p>2005-2019, Scotland: 
    Household waste is one of the largest landfill contributors [1]</p>
       </div>

    <div className={styles.textBox}>
  <div className={styles.textBox}> </div>
  
    <h4>Every year an estimated 2 million tonnes of WEEE (Waste Electrical and Electronic Equipment)
    items are discarded by householders and companies in the UK.
    </h4>
    <h5>UK households are throwing away 155,000 tonnes of domestic electrical waste every year and we are hoarding 527 million small old electricals, weighing around 190,000 tonnes – nearly 20 items per household.</h5>
    <h6> the UK economy could save £370 million if all the old small electricals that are “either thrown away or hoarded” were recycled.</h6>
    <h6>If these household items were recycled, instead of binned, this could save millions of tonnes of CO2 - Material Change </h6>
    </div>
    </div>
    
  );
}

export default About;
