import React, { useState } from 'react';
import Group from './Group'; // Import your Group component

const GroupGallery = () => {
    // Dummy JSON data for groups
    const dummyGroups = [
        {
            "id": "group1",
            "name": "Alpha Team",
            "description": "A team focused on innovative projects.",
            "memberCount": 15
        },
        {
            "id": "group2",
            "name": "Beta Group",
            "description": "Group dedicated to beta testing new features.",
            "memberCount": 10
        },
        {
            "id": "group3",
            "name": "Charlie Squad",
            "description": "A squad specializing in customer support and engagement.",
            "memberCount": 20
        },
        {
            "id": "group4",
            "name": "Delta Circle",
            "description": "Circle for strategic planning and leadership.",
            "memberCount": 8
        },
        {
            "id": "group5",
            "name": "Echo Network",
            "description": "Networking group for professional growth and opportunities.",
            "memberCount": 30
        }
    ];

    // State to hold groups data
    const [groups, setGroups] = useState(dummyGroups);

    return (
        <div className="group-gallery">
            {groups.map(group => (
                <Group key={group.id} data={group} />
            ))}
        </div>
    );
};

export default GroupGallery;
