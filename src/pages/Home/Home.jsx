import React from "react";
import styles from "./Home.module.css";
import TextInput from "../../components/common/InputFields/TextInput/TextInput";
import Button from "../../components/common/CustomButton/Button";
import SingleNoteCard from "../../components/SingleNoteCard/SingleNoteCard";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const notesData = [
  {
    id: 1,
    title: "Title 1",
    description:
      "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    id: 3,
    title: "Title 3",
    description: "dolor sit amet, consectetuer adipiscing elit. ",
  },
  {
    id: 4,
    title: "Title 4",
    description: "dolor sit amet, consectetuer adipiscing elit. ",
  },
  {
    id: 5,
    title: "Title 5",
    description: "dolor sit amet, consectetuer adipiscing elit. ",
  },
  {
    id: 6,
    title: "Title 6",
    description:
      "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const addNewNote = () => {
    navigate("/addnote");
  };

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
          <TextInput w={"60%"} br="12px" placeholder={"Search by Title...."} />
          <Button buttonText={"Add Note"} onClick={addNewNote} />
        </div>
        <div className={styles.notesList}>
          {notesData.map((note) => {
            return <SingleNoteCard key={note.id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
