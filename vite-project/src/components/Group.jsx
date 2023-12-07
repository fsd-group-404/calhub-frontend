import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import GroupModal from "./GroupModal";

const Group = ({ data, joinable, onReload}) => {

// make some dummy member data (two members)
let dummyMemberData = [
    {
        "id": 1,
        "userID": 1,
        "groupID": 1,
        "role": "owner",
        "users": {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe@berkeley",
            "imageUrl": "https://cdn2.vectorstock.com/i/1000x1000/17/41/initial-j-letter-with-crown-vector-38781741.jpg",
        }
    },
    {
        "id": 2,
        "userID": 2,
        "groupID": 1,
        "role": "member",
        "users": {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "janedoe@berkeley",
            "imageUrl": "https://i.pinimg.com/1200x/ca/2a/c2/ca2ac2b6e453a2654534636091579e7c.jpg",
        }
    }
]



  let [memberData, setMemberData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    console.log("DATA")
    console.log(data)
    console.log(`Fetching group ${data.id} members...`);
    axios
      .get(`http://localhost:3000/groups/${data.id}/members`)
      .then((response) => {
        console.log("Member data fetched:");
        if (response.data.length > 0) {
          console.log("HAD STUFF");
          console.log(response.data);
          setMemberData(response.data);
          console.log("set");
        }
      });
  }, []);

  return (
    <>
      <div
        className="border border-black p-6 m-2 cursor-pointer w-1/5 h-80 p-4 shadow-2xl shadow-accent rounded-xl transition durprimary hover:scale-105"
        onClick={openModal}
      >
        <div className="flex flex-col justify-between h-full">
          <div></div>
          <div>
            <h3 className="text-lg font-bold">{data.code}</h3>
            <p className="text-lg">{data.name}</p>
            <div className="divider divider-accent"></div>
            <p>#{data.id}</p>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            {memberData && memberData.length > 0 && (
                <>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={memberData[0].users.imageUrl}/>
                    </div>
                  </div>
                </>
            )}
            {
  memberData.length-1 !== 0 &&
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral text-neutral-content">
      <span>+{memberData.length - 1}</span>
    </div>
  </div>
}
            </div>

            <p className="text-right">{memberData.length}/{data.sizeLimit} Members</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <GroupModal onClose={closeModal} data={data} memberData={memberData} joinable={joinable} onReload={onReload} reloadMD={setMemberData}/>
      )}
    </>
  );
};

export default Group;
