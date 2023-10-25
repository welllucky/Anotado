import styles from "./styles.module.css";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Image
        width="36"
        height="36"
        src="https://img.icons8.com/3d-fluency/94/note.png"
        alt="note"
      />
      <h1 className={styles.siteTitle}>Anotado!</h1>
    </header>
  );
};
