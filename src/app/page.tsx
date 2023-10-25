"use client";
import styles from "./styles.module.css";
import { Header } from "@/components";
import { NotesProps } from "@/components/NoteItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { AnimatedBackground } from "@/components/Background";
import { InputSession } from "@/components/InputSession";
import { NoteList } from "@/components/NoteListSession";

export default function Home() {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  useEffect(() => {
    axios
      .get("https://6538a1c3a543859d1bb1aa2d.mockapi.io/Notes")
      .then((res) => {
        setNotes(res?.data);
      });
  }, []);

  return (
    <main data-cy="flex-container" className={styles.flexContainer}>
      <Header />
      <div data-cy="content-container" className={styles.contentContainer}>
        <div data-cy="left-content-wrapper" className={styles.contentWrapper}>
          <NoteList notes={notes} />
        </div>
        <div className={styles.contentWrapper}>
          <InputSession notes={setNotes} />
        </div>
      </div>
      <AnimatedBackground />
    </main>
  );
}
