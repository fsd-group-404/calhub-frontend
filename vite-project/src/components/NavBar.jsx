import { UserButton } from "@clerk/clerk-react";
import logoImage from "../assets/logo.png";
import { Link } from "react-router-dom";

// TODO: Make it so that the currently viewed page is highlighted in the navbar

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="w-24 rounded-full">
          <img src={logoImage} alt="logo" />
        </div>
        <a className="btn btn-ghost text-xl">CalHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/"><a>Group Search</a></Link>
          </li>
          <li>
            <Link to="/my-groups"><a>My Groups</a></Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input type="checkbox" value="light" className="toggle theme-controller"/>
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
