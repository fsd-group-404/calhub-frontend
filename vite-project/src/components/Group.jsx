import React, { useState } from 'react';
import GroupModal from './GroupModal'; // Import the modal component

const Group = ({ data }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className="border border-black p-2 m-2 cursor-pointer" onClick={openModal}>
            <h3 className="text-md font-bold">{data.name}</h3>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>Member Count:</strong> {data.memberCount}</p>
            <p><strong>Rating:</strong> {data.rating} / 5</p>
            {isModalOpen && <GroupModal data={data} onClose={closeModal} />}
        </div>
    );
};

export default Group;
