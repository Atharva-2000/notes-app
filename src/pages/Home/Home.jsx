import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import TextInput from "../../components/common/InputFields/TextInput/TextInput";
import Button from "../../components/common/CustomButton/Button";
import SingleNoteCard from "../../components/SingleNoteCard/SingleNoteCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useAppContext } from "../../AppContext";

const Home = () => {
  const navigate = useNavigate();

  const { notes, filterNotesByTitle } = useAppContext();

  const [searchText, setSearchText] = useState("");

  const handleInputChange = (name, value) => {
    setSearchText(value);
  };

  const addNewNote = () => {
    navigate("/addnote");
  };

  useEffect(() => {
    filterNotesByTitle(searchText);
  }, [searchText]);

  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.notesContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            value={searchText}
            onChange={handleInputChange}
            w={"60%"}
            br="12px"
            placeholder={"Search by Title...."}
          />
          <Button buttonText={"Add Note"} onClick={addNewNote} />
        </div>
        <div className={styles.notesList}>
          {notes.length > 0 ? (
            notes.map((note) => {
              return <SingleNoteCard key={note.id} note={note} />;
            })
          ) : (
            <p className={styles.noNotesMessage}>No Notes Present...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
