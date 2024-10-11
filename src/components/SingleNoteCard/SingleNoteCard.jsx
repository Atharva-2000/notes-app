import React from "react";
import styles from "./SingleNoteCard.module.css";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";

const SingleNoteCard = ({ note }) => {
  const navigate = useNavigate();

  const { deleteNote, setSelectedId } = useAppContext();

  const editNote = (id) => {
    setSelectedId(id);
    navigate("/editnote"); //navigate to edit note page
  };

  return (
    <div className={styles.noteCard}>
      <p className={styles.title}>
        {note.title.substring(0, 45)}
        {note.title.length >= 45 ? <span>...</span> : null}
      </p>
      <p>
        {note.description.substring(0, 90)}
        {note.description.length >= 90 ? (
          <Link to={`/${note.id}`} className={styles.readMore}>
            {" "}
            Read more.....
          </Link>
        ) : null}
      </p>
      <div className={styles.actionButtonsContainer}>
        <IconEdit
          className={styles.actionIcon}
          onClick={() => {
            editNote(note.id);
          }}
        />
        <IconTrash
          color="red"
          className={styles.actionIcon}
          onClick={() => {
            deleteNote(note.id);
          }}
        />
      </div>
    </div>
  );
};

export default SingleNoteCard;
