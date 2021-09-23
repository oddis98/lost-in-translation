import styles from './translation.module.css';
import { useSelector } from 'react-redux';

const TranslationCard = (props) => {
  const { translation } = useSelector((state) => state.translateReducer);
  const regex = /[a-z]/;

  return (
    <div className={styles.innerContainer}>
      <div className={styles.card}>
        <ul>
          {[...translation].map((char, index) => {
            if (!regex.test(char)) {
              return <span></span>;
            }
            return (
              <img
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
