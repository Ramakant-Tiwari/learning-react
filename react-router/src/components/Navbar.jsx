import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <center>
      <h1>
        <Link to="/">Home</Link>     |    <Link to="/about">About</Link>    |    <Link to="/products">Products</Link>
      </h1>
    </center>
  );
}
