import React from "react";
import styles from "./index.module.css";
import Slider from "@material-ui/core/Slider";

function Sliders({title, min, max, initial, step}) {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <>
      <p className={styles.title}>{title}:</p>

      <Slider
        initalvalue={initial}
        min={min}
        max={max}
        step={step}
        style={{ width: "22vw", color: "green" }}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />

      
    </>
  );
}
export default Sliders;
