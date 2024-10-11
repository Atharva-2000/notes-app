import React from "react";
import styles from "./CreateNote.module.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/CustomButton/Button";
import NotesForm from "../../components/NotesForm/NotesForm";

const CreateNote = () => {
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
        <NotesForm title={"Create New Note"} operation={"creation"} />
      </div>
    </div>
  );
};

export default CreateNote;
