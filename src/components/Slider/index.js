import React from "react";
import styles from "./index.module.css";
import Slider from "@material-ui/core/Slider";

function Sliders() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <>
      <h4 className={styles.title}>hi?</h4>

      <Slider
        initalvalue={10000}
        min={10000}
        max={100000}
        step={10000}
        style={{ width: "50vw", color: "blue" }}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />

      <div className={styles.check}>
        <p>Not sure? </p>
        <input type="checkbox" />
      </div>
    </>
  );
}
export default Sliders;
