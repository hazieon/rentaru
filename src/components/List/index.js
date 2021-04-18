import React from 'react';
import styles from "./index.module.css"
import Form from 'react-bootstrap/Form'
import Sliders from "../Slider"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


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

<div className={styles.panel}>
     <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Collection Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
        
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
    <button className={styles.panel}>Submit</button>
    </div>

    
  );
}

export default List;
