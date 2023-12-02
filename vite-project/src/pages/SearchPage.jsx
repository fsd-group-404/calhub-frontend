import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import NavBar from "../components/NavBar";
import GroupGallery from "../components/GroupGallery";
import CreateGroupButton from "../components/CreateGroupButton";
import axios from "axios";

function SearchPage() {
  const { user } = useUser();
  // TODO: Shift group state up to here

  useEffect(() => {
    if (user) {
      console.log("Sending following user data to server:", user);
      console.log(JSON.stringify(user))
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("No user data available");
    }
  }, [user]);

  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold underline text-center">Search Page</h1>
      <CreateGroupButton />
      <GroupGallery />
    </>
  );
}

export default SearchPage;
