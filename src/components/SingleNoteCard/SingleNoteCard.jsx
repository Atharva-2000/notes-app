import React from "react";
import styles from "./SingleNoteCard.module.css";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

const SingleNoteCard = ({ note }) => {
  const navigate = useNavigate();

  const editNote = (id) => {
    navigate("/editnote"); //navigate to edit note page
  };

  return (
    <div className={styles.noteCard}>
      <p className={styles.title}>
        {note.title.substring(0, 45)}
        {note.title.length >= 45 ? <span>...</span> : null}
      </p>
      <p>
        {note.description.substring(0, 80)}
        {note.description.length >= 80 ? (
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
        <IconTrash color="red" className={styles.actionIcon} />
      </div>
    </div>
  );
};

export default SingleNoteCard;
