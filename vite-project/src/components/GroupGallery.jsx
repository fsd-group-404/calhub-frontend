import React, { useState } from 'react';
import Group from './Group'; // Import your Group component

const GroupGallery = () => {
    // Dummy JSON data for groups
    const dummyGroups = [
        {
            "id": "group1",
            "name": "Alpha Team",
            "description": "A team focused on innovative projects.",
            "memberCount": 15,
            "rating": 4.5
        },
        {
            "id": "group2",
            "name": "Beta Group",
            "description": "Group dedicated to beta testing new features.",
            "memberCount": 10,
            "rating": 4.0
        },
        {
            "id": "group3",
            "name": "Charlie Squad",
            "description": "A squad specializing in customer support and engagement.",
            "memberCount": 20,
            "rating": 3.8
        },
        {
            "id": "group4",
            "name": "Delta Circle",
            "description": "Circle for strategic planning and leadership.",
            "memberCount": 8,
            "rating": 4.2
        },
        {
            "id": "group5",
            "name": "Echo Network",
            "description": "Networking group for professional growth and opportunities.",
            "memberCount": 30,
            "rating": 4.7
        }
    ];
    


    // State to hold groups data
    const [groups, setGroups] = useState(dummyGroups);

    return (
        <div className="flex flex-row flex-wrap justify-center gap-4">
            {groups.map(group => (
                <Group key={group.id} data={group} />
            ))}
        </div>
    );
};

export default GroupGallery;


