import { UserButton } from "@clerk/clerk-react";
import logoImage from "../assets/logo.png";

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
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
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
