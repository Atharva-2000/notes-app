import React from "react";
import Button from "../../components/common/CustomButton/Button";
import { useNavigate } from "react-router-dom";
import NotesForm from "../../components/NotesForm/NotesForm";
import styles from "./EditNote.module.css";
import Header from "../../components/Header/Header";

const EditNote = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.noteFormContainer}>
        <div style={{ alignSelf: "flex-start" }}>
          <Button buttonText={"Go Back"} onClick={goBack} />
        </div>
        <NotesForm title={"Edit Note"} operation={"updation"} />
      </div>
    </div>
  );
};

export default EditNote;
