import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import NavBar from "../components/NavBar";
import GroupGallery from "../components/GroupGallery";
import { Button } from 'react-daisyui'
import UserInfoModal from "../components/Modal";

function SearchPage() {
  const { user } = useUser();
  const [showModal, setShowModal] = useState(false);

  /* useEffect(() => {
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
 */

  const handleSubmit = (formData) => {
    // Process form data (e.g., send it to the server)
    console.log("Form data submitted:", formData);
    // Make a fetch request here to send formData to the server
    // Reset formData or close the modal after successful submission
  };

  return (
    <>
      <NavBar />
      <Button onClick={() => setShowModal(true)}>Fill in your info!</Button>
      <Button>Match me</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <GroupGallery />

      <UserInfoModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default SearchPage;
