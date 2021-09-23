import { useState } from "react";
import Input from "../Input/Input";
import TranslationCard from "./TranslationCard";
import styles from "./translation.module.css";
import { useDispatch } from "react-redux";
import { translateSetAction } from "../../store/actions/translateActions";

const Translation = () => {
  const [translation, setTranslation] = useState("");

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setTranslation(e.target.value);
  };
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
