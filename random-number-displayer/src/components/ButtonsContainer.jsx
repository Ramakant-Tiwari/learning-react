import { useContext } from "react";
import css from "../App.module.css";
import Button from "./Button";
import { AppContext } from "./AppContext";

export default function ButtonsContainer() {
  const { buttonNames } = useContext(AppContext);
  return (
    <section id={css.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <Button
          key={buttonName}
          buttonName={buttonName}
        />
      ))}
    </section>
  );
}
