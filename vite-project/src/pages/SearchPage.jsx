import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import NavBar from "../components/NavBar";
import GroupGallery from "../components/GroupGallery";
import CreateGroupButton from "../components/CreateGroupButton";
import SearchBar from '../components/SearchBar';
import axios from "axios";

function SearchPage() {
  const { user } = useUser();
    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // New state for the search term
  
    // Function to handle search logic
    const handleSearch = (query) => {
      // Here you would handle the search logic, like filtering groups or making an API call
      console.log(`Searching for: ${query}`);
      setSearchTerm(query);
      // You might want to use axios here to make a call to your API to search for groups
    };
  

  useEffect(() => {
    if (user) {
      console.log("!!!!!!!!!!!!!!!!!!!")
      console.log("Sending following user data to server:", user);
      console.log(JSON.stringify(user))
      fetch("http://localhost:3000/users", {
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
      {/* <h1 className="text-3xl font-bold underline text-center">Search Page</h1> */}
      <SearchBar onSearch={setSearchTerm} /> {/* Include the SearchBar here */}
      <GroupGallery url= {`http://localhost:3000/groups/new?userID=${user.id}&searchTerm=${encodeURIComponent(searchTerm)}`} toggle={toggle} joinable={true} filter={searchTerm}/>
    </>
  );
}

export default SearchPage;
