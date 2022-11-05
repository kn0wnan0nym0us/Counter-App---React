import { Link } from "react-router-dom";
function NavLink({ src, name }) {
  return (
    <li>
      <Link to={src}>{name}</Link>
    </li>
  );
}

const Navbar = () => {
  return (
    <header>
      <div className="header--inner">
        <h1 className="logo">Counter App</h1>
        <nav>
          <ul>
            <NavLink src={"/"} name="Home" />
            <NavLink src={"/counter"} name="Counter" />
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
