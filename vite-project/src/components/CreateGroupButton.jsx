import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const CreateGroupButton = ({setToggle}) => {
    const { user } = useUser();
    const [groupData, setGroupData] = useState({
        code: "",
        name: "",
        description: "",
        sizeLimit: null,
      });

    const handleInputChange = (event) => {
        console.log("SOMETHING IS CHANGING")
        const { name, value } = event.target;
        setGroupData({ ...groupData, [name]: value });
      }
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        document.getElementById("creategroupmodal").close()
        console.log(groupData);
        groupData.userID = user.id;
        axios
            .post("http://localhost:3000/groups", groupData)
            .then((response) => {
                console.log(response.data);
                setToggle((prev) => !prev);
            });
        }
        // TODO: Size modal appropriately
  return (
    <>
      <button
        className="btn btn-primary block mx-auto"
        onClick={() => document.getElementById("creategroupmodal").showModal()}
      >
        Create Study Group
      </button>
      <dialog id="creategroupmodal" className="modal">
        <div className="modal-box rounded-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="p-4 shadow-md rounded-lg">
    <h3 className="text-lg font-bold text-center text-white mb-4">Fill out some information about your study group</h3>
    <div className="space-y-3 mb-4">
        <input type="text" placeholder="Course Code" name="code" value={groupData.code} className="bg-white input input-bordered input-primary w-full text-black" onChange={handleInputChange} />
        <input type="text" placeholder="Course Name" name="name" value={groupData.name} className="bg-white input input-bordered input-primary w-full text-black" onChange={handleInputChange} />
        <input type="text" placeholder="Description (location, time, recurrence of meetings)" name="description" value={groupData.description} className="bg-white input input-bordered input-primary w-full text-black" onChange={handleInputChange} />
        <input type="number" placeholder="Group Size" name="sizeLimit" value={groupData.sizeLimit} className="bg-white input input-bordered input-primary w-full text-black" onChange={handleInputChange} />
    </div>
    <div className="flex justify-center">
        <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
    </div>
    <p className="text-sm text-white text-center mt-4">Press ESC key or click on ✕ button to close</p>
</div>
        </div>
      </dialog>
    </>
  );
};

export default CreateGroupButton;
