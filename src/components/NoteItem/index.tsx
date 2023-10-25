import styles from "./styles.module.css";

export interface NotesProps {
  id: string;
  description: string;
  creadtedAt?: string;
  isActived: boolean;
}

export const Notes = ({ ...props }: NotesProps) => {
  return (
    <div className={styles.noteContainer}>
      <input type="checkbox" />
      <p className={styles.noteDescription}>
        {props.description}
      </p>
    </div>
  );
};
