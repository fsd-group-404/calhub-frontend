import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import GroupModal from "./GroupModal";

const Group = ({ data, joinable }) => {
  let [memberData, setMemberData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
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
        className="border border-black p-6 m-2 cursor-pointer w-1/5 h-80 p-4 shadow-2xl shadow-accent rounded-xl transition durprimary hover:scale-110"
        onClick={openModal}
      >
        <div className="flex flex-col justify-between h-full">
          <div></div>
          <div>
            <h3 className="text-lg font-bold">{data.name}</h3>
            <p className="text-lg">{data.description}</p>
            <div className="divider divider-accent"></div>
            <p>#{data.id}</p>
            {memberData && memberData.length > 0 && (
                <>
                  <div className="avatar">
                    <div className="w-12">
                      <img src={memberData[0].users.imageUrl}/>
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-12 bg-neutral text-neutral-content">
                      <span>+{data.size - 1}</span>
                    </div>
                  </div>
                </>
              )}
            <p className="text-right">{data.rating} Stars</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <GroupModal onClose={closeModal} data={data} memberData={memberData} joinable={joinable}/>
      )}
    </>
  );
};

export default Group;
