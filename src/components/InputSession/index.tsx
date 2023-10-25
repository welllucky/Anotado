import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { NotesProps } from "../NoteItem";

interface InputSessionProps {
  notes: React.Dispatch<React.SetStateAction<NotesProps[]>>;
}

export const InputSession = ({ notes }: InputSessionProps) => {
  const [newNote, setNewNote] = useState("");
  const addNewNote = () => {
    if (newNote) {
      axios
        .post("https://6538a1c3a543859d1bb1aa2d.mockapi.io/Notes", {
          description: newNote,
          isActived: true,
        })
        .then((res) => {
          console.log("entrou aqui");

          notes((prevState) => [...prevState, res?.data]);
          setNewNote("");
        });
    }
  };
  return (
    <div className={styles.inputInfoContainer}>
      <h3 className={styles.inputTextAnotation}>O que você deseja anotar?</h3>
      <div className={styles.inputAndButtonWrapper}>
        <input
          className={styles.inputStyles}
          type="text"
          placeholder="Ex: Lembrar de comprar pão"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className={styles.buttonStyles} onClick={addNewNote}>
          Adicionar Nota
        </button>
      </div>
    </div>
  );
};
