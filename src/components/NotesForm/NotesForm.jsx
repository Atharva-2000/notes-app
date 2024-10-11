import React from "react";
import TextInput from "../common/InputFields/TextInput/TextInput";
import Button from "../common/CustomButton/Button";
import styles from "./NotesForm.module.css";

const NotesForm = ({ title, operation }) => {
  return (
    <div className={styles.noteFormCard}>
      <p className={styles.title}>{title}</p>
      <div className={styles.formField}>
        <label>Title</label>
        <TextInput placeholder={"Enter Title...."} w={"97%"} />
      </div>
      <div className={styles.formField}>
        <label>Description</label>
        <TextInput placeholder={"Enter Description...."} w={"97%"} />
      </div>
      <div className={styles.buttonContainer}>
        {operation === "creation" && <Button buttonText={"Add Note"} w="60%" />}
        {operation === "updation" && (
          <>
            <Button buttonText={"Cancel"} />
            <Button buttonText={"Save Note"} />
          </>
        )}
      </div>
    </div>
  );
};

export default NotesForm;
