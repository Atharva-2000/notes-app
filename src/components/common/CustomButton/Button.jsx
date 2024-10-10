import React from "react";
import styles from "./Button.module.css";

const Button = ({
  buttonText,
  bg = "#0066ff",
  c = "white",
  br = "6px",
  w = "auto",
  fullWidth = false,
  onClick = () => {},
}) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        color: c,
        borderRadius: br,
        borderColor: bg,
        width: fullWidth === true ? "100%" : w,
      }}
      className={styles.customButton}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
