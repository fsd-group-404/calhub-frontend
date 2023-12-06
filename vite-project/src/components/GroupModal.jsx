import React, { useState, useEffect } from "react";
import {useUser} from "@clerk/clerk-react";
import axios from "axios";

const GroupModal = ({ onClose, data, memberData, joinable }) => {
const [hasJoined, setHasJoined] = useState(false);
const { user } = useUser();
const [isOwner, setIsOwner] = useState(false);
  useEffect(() => {
    console.log("MD")
    console.log(memberData)

    // Check if the current user is an owner
    const currentUserRole = memberData.find(member => member.userID === user.id)?.role;
    setIsOwner(currentUserRole === 'owner');
    
    // Disable scrolling on mount
    document.body.classList.add("overflow-y-hidden");

    // Re-enable scrolling on unmount
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const joinGroup = async () => {
    console.log("Joining group...");
    setHasJoined(true);
    try {
      // Replace the URL and payload with your actual endpoint and data
      const response = await axios.post(`http://localhost:3000/groups/${data.id}/members`, { userID: user.id });
      
      if (response.status === 200) {
        console.log("JOINED GROUP")
        setHasJoined(true);
      } else {
        console.log("FAILED TO JOIN GROUP SERVER SIDE")
        console.log("Response")
      }
    } catch (error) {
        console.log(error)
      console.log("FAILED TO JOIN GROUP CLIENT SIDE")
    }
  };

  const removeMember = (memberUserId) => {
    console.log("User removed", memberUserId);
    // Add your logic to remove a user from the group here
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="modal-box w-3/4 h-3/4 max-w-none max-h-none rounded-xl shadow-2xl shadow-accent">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        <h1 className="font-bold text-lg text-center">{data.name}</h1>
        <p className="text-lg">
          <strong>Description:</strong> {data.description}
        </p>
        <p className="text-lg">
          <strong>Size:</strong> {data.sizeLimit}
        </p>
        <p className="text-lg">
          <strong>Rating:</strong> {data.rating} / 5
        </p>
        <div className="divider"></div>
        <h3>
          <strong>Members ({memberData.length}):</strong>
        </h3>
        {memberData.map((member) => (
  <div key={member.userID} className="flex gap-4">
    <div className="avatar">
      <div className="w-12 rounded-full">
        <img src={member.users.imageUrl} />
      </div>
    </div>
    <div className="flex-grow flex flex-col justify-center">
      <p className="text-sm font-semibold">{member.users.firstName} {member.users.lastName}</p>
      <p className="text-xs text-gray-600">{member.users.emailAddress}</p>
    </div>
    <div>
    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
      member.role === 'owner' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
    }`}>
      {member.role}
    </span>
    </div>
    {isOwner && member.userID !== user.id && (
              <button
                onClick={() => removeMember(member.userID)}
                className="ml-auto text-red-600 hover:text-red-700"
              >
                ✕
              </button>
            )}
  </div>
))}
        {joinable &&(
            <button
        className={`btn ${hasJoined ? 'btn-gray' : 'btn-primary'} block mx-auto`}
        onClick={!hasJoined ? joinGroup : undefined}
        disabled={hasJoined}>
      
        {hasJoined ? "Joined" : "Join Group"}
      </button>
        )}
        
      </div>
    </div>
  );
};

export default GroupModal;
