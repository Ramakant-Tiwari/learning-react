import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-black" style={{ overflow: "hidden", width: "250px" }}>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <NavLink to="/create-post" className="nav-link text-white py-3 border-bottom">
            Create Post
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-white py-3 border-bottom">
            Posts
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
