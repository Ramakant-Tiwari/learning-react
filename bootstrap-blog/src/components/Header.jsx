import { NavLink, Outlet } from "react-router";

export default function Header() {
  return (
    <header className="p-4 bg-warning-subtle fs-5">
      <ul className="nav nav-pills d-flex justify-content-center">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Home
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
