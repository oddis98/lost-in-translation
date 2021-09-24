import styles from "./translation.module.css";
import { useSelector } from "react-redux";

/**
 * @returns a card with the translated word in sign language.
 */
const TranslationCard = () => {
  // Implements translation from redux store.
  const { translation } = useSelector((state) => state.translateReducer);
  const regex = /[a-z]/;

  // Removes punctuation, spaces, and special characters from the word-to-be-translated (translation)
  const stripWord = () => {
    return [...translation].filter((letter) => {
      if (regex.test(letter)) {
        return letter;
      }
    });
  };

  return (
    <div className={styles.innerContainer}>
      <div className={styles.card}>
        <ul className={styles.ul}>
          {stripWord().map((char, index) => {
            return (
              <img
                className={styles.image}
                key={index}
                src={`/individial_signs/${char}.png`}
                alt={char}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.purpleDiv}>
        <p className={styles.translateTag}>Translation</p>
      </div>
    </div>
  );
};

export default TranslationCard;
