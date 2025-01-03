import { useContext } from "react";
import css from "../App.module.css";
import { AppContext } from "./AppContext";

export default function Button({ buttonName }) {
  const { addToInput } = useContext(AppContext);
  const handleClick = function (e) {
    addToInput((input, setInput) => {
      if (buttonName === "C") {
        const updatedInput = "";
        setInput(updatedInput);
        return;
      }
      if (buttonName === "=") {
        setInput(eval(input));
        return;
      }
      const updatedInput = input + buttonName;
      setInput(updatedInput);
    });
  };

  return (
    <button id={css.button} onClick={handleClick}>
      {buttonName}
    </button>
  );
}
