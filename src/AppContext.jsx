import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const AppContext = createContext({
  notes: [],
  getAllNotes: () => {},
  selectedId: null,
  setSelectedId: () => {},
  getSingleNote: () => {},
  filterNotesByTitle: () => {},
  addNewNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
});

export const AppProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [selectedId, setSelectedId] = useState(null);

  const getAllNotes = () => {
    const allNotes = JSON.parse(localStorage.getItem("notes"));
    if (allNotes) {
      setNotes(allNotes);
    } else setNotes([]);
  };

  const getSingleNote = (id) => {
    const note = notes.find((item) => item.id === id);
    return note;
  };

  const filterNotesByTitle = (text) => {
    const filteredNotes = notes.filter((item) => {
      if (item.title.includes(text)) return item;
    });

    if (text.trim() === "") getAllNotes();
    else setNotes(filteredNotes);
  };

  const updateLocalStorage = (notesList, toastMessage) => {
    localStorage.setItem("notes", JSON.stringify(notesList));
    toast.success(`${toastMessage} Sucessfully !!`);
    getAllNotes();
  };

  const addNewNote = (note) => {
    let newNotesList = notes;
    newNotesList.push(note);
    setNotes(newNotesList);
    updateLocalStorage(newNotesList, "Note Added");
  };

  const editNote = (id, note) => {
    const updatedNotesList = notes.map((item) => {
      if (item.id === id) return note;
      else return item;
    });
    setNotes(updatedNotesList);
    updateLocalStorage(updatedNotesList, "Updated");
  };

  const deleteNote = (id) => {
    const updatedNotesList = notes.filter((item) => item.id !== id);
    setNotes(updatedNotesList);
    updateLocalStorage(updatedNotesList, "Deleted");
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <AppContext.Provider
      value={{
        notes,
        getAllNotes,
        getSingleNote,
        filterNotesByTitle,
        addNewNote,
        editNote,
        deleteNote,
        selectedId,
        setSelectedId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
