//imports
import React, { useEffect } from "react";
import { UserButton } from "@clerk/clerk-react";
import NavBar from "./NavBar";

function SearchPage() {
  // TODO: Fetch all groups from the database with a useEffectand display them in GroupGallery
  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default SearchPage;
