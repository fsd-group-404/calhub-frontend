import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import NavBar from "../components/NavBar";
import GroupGallery from "../components/GroupGallery";
import CreateGroupButton from "../components/CreateGroupButton";
import axios from "axios";

function MyGroupsPage() {
  const { user } = useUser();
  console.log("AAAA")
  console.log(user)
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <NavBar />
      {/* <h1 className="text-3xl font-bold underline text-center">My Groups Page</h1> */}
      <CreateGroupButton setToggle={setToggle}/>
      <br></br>
      <GroupGallery url={`http://localhost:3000/groups/curr?userID=${user.id}`} toggle={toggle} joinable={false} filter={""}/>
    </>
  );
}

export default MyGroupsPage;
