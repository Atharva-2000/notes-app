import React, { useEffect, useState } from "react";
import TextInput from "../common/InputFields/TextInput/TextInput";
import Button from "../common/CustomButton/Button";
import styles from "./NotesForm.module.css";
import { v4 as uuid } from "uuid";
import { useAppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NotesForm = ({ title, operation }) => {
  const navigate = useNavigate();

  const { getSingleNote, addNewNote, selectedId, setSelectedId, editNote } =
    useAppContext();

  const emptyNote = {
    id: uuid(),
    title: "",
    description: "",
  };

  const [note, setNote] = useState(emptyNote);

  const handleInputChange = (name, value) => {
    setNote({ ...note, [name]: value });
  };

  const addNote = () => {
    if (note.title.trim() !== "") {
      addNewNote(note);
      navigate("/");
    } else {
      toast.error("Title cannot be empty !!");
    }
  };

  const edit_note = () => {
    if (note.title.trim() !== "") {
      editNote(selectedId, note);
      navigate("/");
      setSelectedId(null);
    } else {
      toast.error("Title cannot be empty !!");
    }
  };

  const getOriginalNote = () => {
    const originalNote = getSingleNote(selectedId);
    setNote(originalNote);
  };

  useEffect(() => {
    if (selectedId) {
      getOriginalNote();
    }
  }, [selectedId]);

  return (
    <div className={styles.noteFormCard}>
      <p className={styles.title}>{title}</p>
      <div className={styles.formField}>
        <label>Title</label>
        <TextInput
          value={note.title}
          name={"title"}
          onChange={handleInputChange}
          placeholder={"Enter Title...."}
          w={"97%"}
        />
      </div>
      <div className={styles.formField}>
        <label>Description</label>
        <textarea
          value={note.description}
          name="description"
          onChange={(e) => {
            handleInputChange("description", e.target.value);
          }}
          placeholder={"Enter Description...."}
          className={styles.descriptionField}
        />
      </div>
      <div className={styles.buttonContainer}>
        {operation === "creation" && (
          <Button buttonText={"Add Note"} w="60%" onClick={addNote} />
        )}
        {operation === "updation" && (
          <>
            <Button buttonText={"Cancel"} onClick={getOriginalNote} />
            <Button buttonText={"Save Note"} onClick={edit_note} />
          </>
        )}
      </div>
    </div>
  );
};

export default NotesForm;
