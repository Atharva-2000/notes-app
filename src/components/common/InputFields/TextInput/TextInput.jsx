import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({
  value,
  onChange,
  name,
  placeholder,
  w,
  fullWidth,
  br = "4px",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      name={name}
      placeholder={placeholder}
      style={{
        width: fullWidth === true ? "100%" : w,
        borderRadius: br,
      }}
      className={styles.textInput}
    />
  );
};

export default TextInput;
