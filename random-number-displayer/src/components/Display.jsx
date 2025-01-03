import { useContext } from "react";
import css from "../App.module.css";
import {AppContext} from "./AppContext";

export default function Display() {
  const {input} = useContext(AppContext);
  return (
    <input id={css.display} type="text" value={input} readOnly />
  );
}
