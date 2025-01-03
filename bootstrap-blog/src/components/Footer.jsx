import { useContext, useLayoutEffect, useRef } from "react";
import { AppContext } from "../AppContext";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center p-4 border-top bg-warning-subtle fs-5 ">
      <p className="col-md-4 mb-0 text-body-secondary text-center">© 2024 RKT, Inc</p>
    </footer>
  );
}
