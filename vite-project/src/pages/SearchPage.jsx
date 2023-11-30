import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import NavBar from "../components/NavBar";
import GroupGallery from "../components/GroupGallery";

function SearchPage() {
  const { user } = useUser();

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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <GroupGallery />
    </>
  );
}

export default SearchPage;
