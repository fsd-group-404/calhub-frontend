import React, { useEffect, useState } from 'react';
import Group from './Group'; // Import your Group component
import axios from "axios";

const GroupGallery = () => {
    // Dummy JSON data for groups
    const dummyGroups = [
        {
            "id": "group1",
            "name": "Alpha Team",
            "description": "A team focused on innovative projects.",
            "size": 15,
        },
        {
            "id": "group2",
            "name": "Beta Group",
            "description": "Group dedicated to beta testing new features.",
            "size": 10,
        },
        {
            "id": "group3",
            "name": "Charlie Squad",
            "description": "A squad specializing in customer support and engagement.",
            "size": 20,
        },
        {
            "id": "group4",
            "name": "Delta Circle",
            "description": "Circle for strategic planning and leadership.",
            "size": 8,
        },
        {
            "id": "group5",
            "name": "Echo Network",
            "description": "Networking group for professional growth and opportunities.",
            "size": 30,
        }
    ];
    
    // State to hold groups data (replace with dummyGroups for testing)
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        console.log("UE used")
        axios
            .get("http://localhost:3000/groups")
            .then((response) => {
                console.log(response.data);
                setGroups(response.data);
            });
    }, []);

    // TODO: use tailwind grid instead of flexbox (low priority)
    return (
        <div className="flex flex-row flex-wrap justify-center gap-4 border-8 border-red-600 h-fit">
            {groups.map(group => (
                <Group key={group.id} data={group} />
            ))}
        </div>
    );
};

export default GroupGallery;


