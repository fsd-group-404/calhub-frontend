import React, { useState } from "react";
import axios from "axios";

const CreateGroupButton = () => {
    const [groupData, setGroupData] = useState({
        name: "",
        description: "",
        size: 0,
      });

    const handleInputChange = (event) => {
        console.log("SOMETHING IS CHANGING")
        const { name, value } = event.target;
        setGroupData({ ...groupData, [name]: value });
      }
    
      const handleFormSubmit = (event) => {
        console.log("SUBMIT HIT")
        event.preventDefault();
        document.getElementById("creategroupmodal").close()
        console.log(groupData);
        axios
            .post("http://localhost:3000/groups", groupData)
            .then((response) => {
                console.log(response.data);
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
      <dialog id="creategroupmodal" className="modal border-8">
        <div className="modal-box border-8 w-1/2">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Fill out</h3>
          <input type="text" placeholder="Name" name="name" value={groupData.name} className="input input-bordered input-primary w-full max-w-xs" onChange={handleInputChange}/>
          <input type="text" placeholder="Description" name="description" value={groupData.description} className="input input-bordered input-primary w-full max-w-xs" onChange={handleInputChange}/>
          <input type="number" placeholder="Size" name="size" value={groupData.size} className="input input-bordered input-primary w-full max-w-xs" onChange={handleInputChange}/>
          <button className="btn btn-secondary" onClick={handleFormSubmit}>Submit</button>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default CreateGroupButton;
