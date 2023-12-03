import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Group = ({ data }) => {
    let [memberData, setMemberData] = useState([]);

useEffect(() => {
    console.log("Fetching members...")
    console.log(`http://localhost:3000/groups/${data.id}/members`)
    axios
        .get(`http://localhost:3000/groups/${data.id}/members`)
        .then((response) => {
            console.log("Member data fetched:")
            setMemberData(response.data);
        });
}, []);

    return (
        <>
        <div className="border border-black p-6 m-2 cursor-pointer w-1/5 h-80 p-4 shadow-2xl shadow-accent rounded-xl transition durprimary hover:scale-110" onClick={()=>document.getElementById('groupmodal').showModal()}>
    <div className="flex flex-col justify-between h-full">
        <div></div> 
        <div>
            <h3 className="text-lg font-bold">{data.name}</h3>
            <p className="text-lg">{data.description}</p>
            <div className="divider divider-accent"></div>
            <p>#{data.id}</p>
            <p className="text-right">{memberData.length}/{data.size}</p>
            <p className="text-right">{data.rating} Stars</p>
        </div>
    </div>  
</div>

        <dialog id="groupmodal" className="modal">
        <div className="modal-box max-w-none max-h-none w-3/4 h-3/4 rounded-xl shadow-2xl shadow-accent">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="text-lg"><strong>ID:</strong> {data.id}</p>
            <p className="text-lg"><strong>Description:</strong> {data.description}</p>
            <p className="text-lg"><strong>Size:</strong> {data.size}</p>
            <p className="text-lg"><strong>Rating:</strong> {data.rating} / 5</p>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
        </dialog>
        </>
        

        
    );
};

export default Group;
