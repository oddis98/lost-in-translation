import { useState } from "react";
import Input from "../Input/Input";
import TranslationCard from "./TranslationCard";
import styles from "./translation.module.css";
import { useDispatch } from "react-redux";
import { translateSetAction } from "../../store/actions/translateActions";

/**
 * @returns an input component as well as a translateCard component.
 */
const Translation = () => {
  // Local state
  const [translation, setTranslation] = useState("");

  // Utializes the useDispatch hook.
  const dispatch = useDispatch();

  // Updates local state.
  const onInputChange = (e) => {
    setTranslation(e.target.value);
  };

  // Dispatches the translateSetAction method with translation as parameter.
  const onButtonClick = () => {
    dispatch(translateSetAction(translation));
  };

  return (
    <div className={styles.container}>
      <Input
        onButtonClick={onButtonClick}
        onInputChange={onInputChange}
        placeholder="Write something!"
      />
      <TranslationCard />
    </div>
  );
};

export default Translation;
