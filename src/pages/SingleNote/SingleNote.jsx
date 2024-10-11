import React from "react";
import styles from "./SingleNote.module.css";
import Header from "../../components/Header/Header";
import Button from "../../components/common/CustomButton/Button";
import { useNavigate, useParams } from "react-router-dom";

const SingleNote = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  const goBack = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <div className={styles.main_container}>
      <Header />
      <div className={styles.singleNoteContainer}>
        <div style={{ alignSelf: "flex-start" }}>
          <Button buttonText={"Go Back"} onClick={goBack} />
        </div>
        <div className={styles.noteCard}>
          <p className={styles.title}>Title</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;
