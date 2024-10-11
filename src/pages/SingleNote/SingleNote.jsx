import React, { useEffect, useState } from "react";
import styles from "./SingleNote.module.css";
import Header from "../../components/Header/Header";
import Button from "../../components/common/CustomButton/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../AppContext";

const SingleNote = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const { getSingleNote } = useAppContext();

  const [note, setNote] = useState({});

  const goBack = () => {
    navigate("/"); // Navigate to home page
  };

  useEffect(() => {
    const singleNote = getSingleNote(id);
    if (singleNote) {
      setNote(singleNote);
    } else goBack();
  }, []);

  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.singleNoteContainer}>
        <div style={{ alignSelf: "flex-start" }}>
          <Button buttonText={"Go Back"} onClick={goBack} />
        </div>
        <div className={styles.noteCard}>
          <p className={styles.title}>{note.title}</p>
          <p>{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
