import React, { useEffect, useState } from 'react';
import Group from './Group'; // Import your Group component
import axios from "axios";
//TODO: Add search bar and searching via filter
const GroupGallery = ({toggle}) => {
    let dummyGroups = [
        {
            "id": 1,
            "name": "CS 61A Study Group",
            "description": "Study group for CS 61A: The Structure and Interpretation of Computer Programs.",
            "size": 12,
            "rating": 4.6
        },
        {
            "id": 2,
            "name": "CS 61B Study Group",
            "description": "Collaborative learning for CS 61B: Data Structures.",
            "size": 10,
            "rating": 4.7
        },
        {
            "id": 3,
            "name": "CS 70 Study Group",
            "description": "Discussion group for CS 70: Discrete Mathematics and Probability Theory.",
            "size": 15,
            "rating": 4.5
        }
    ]
    
    // State to hold groups data (replace with dummyGroups for testing)
    const [groups, setGroups] = useState(dummyGroups);

    useEffect(() => {
        console.log("Fetching groups...")
        axios
            .get("http://localhost:3000/groups")
            .then((response) => {
                console.log("Data fetched:")
                console.log(response.data);
                setGroups(response.data);
                console.log(groups)
                for (group in groups) {
                    console.log(group.id)
                }
            });
    }, [toggle]);

    // TODO: use tailwind grid instead of flexbox (low priority)
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 h-fit">
            {groups.map(group => (
                <Group data={group} />
            ))}
        </div>
    );
};

export default GroupGallery;


