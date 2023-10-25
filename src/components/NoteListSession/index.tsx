import { Notes, NotesProps } from "../NoteItem";
import styles from "./styles.module.css";

interface NotesListProps {
  notes: NotesProps[];
}

export const NoteList = ({ notes }: NotesListProps) => {
  return (
    <div data-cy="content" className={styles.content}>
      <h2 data-cy="flex-container" className={styles.sessionTitle}>
        Anotações
      </h2>
      {notes.length > 0 ? (
        <div
          data-cy="notes-list-container"
          className={styles.notesListContainer}
        >
          {notes.map((note) => (
            <Notes
              key={note?.id}
              id={note?.id}
              description={note?.description}
              isActived={note?.isActived}
            />
          ))}
        </div>
      ) : (
        <div className={styles.notesListContainer}>
          <p className={styles.noNotesText}>Sem anotações por hoje!</p>
        </div>
      )}
    </div>
  );
};
