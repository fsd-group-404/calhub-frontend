import { UserButton } from "@clerk/clerk-react";
import logoImage from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="w-24 rounded-full">
          <img src={logoImage} alt="logo" />
        </div>
        <a className="btn btn-ghost text-xl">CALHUB</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={isCurrentPath('/') ? 'font-bold' : ''}>
            <Link to="/"><a>Group Search</a></Link>
          </li>
          <li className={isCurrentPath('/my-groups') ? 'font-bold' : ''}>
            <Link to="/my-groups"><a>My Groups</a></Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <UserButton />
      </div>
    </div>
  );
}

export default NavBar;
