import React, { useEffect, useState } from 'react';
import Group from './Group'; // Import your Group component
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
//TODO: Add search bar and searching via filter
const GroupGallery = ({url, toggle, joinable}) => {
    const { user } = useUser();
    let dummyGroups = [
        {
            "id": 1,
            "code": "CS 61A",
            "name": "The Structure and Interpretation of Computer Programs",
            "description": "Meets W, F in Haas Pavilion (10:00 AM - 12:00 PM)",
            "sizeLimit": 5
        },
        {
            "id": 1,
            "code": "CS 61B",
            "name": "Data Structures and Algorithms",
            "description": "Meets T, Th in Ida Sproul Lounge (2:00PM - 4:00PM)",
            "sizeLimit": 6
        },
        {
            "id": 1,
            "code": "CS 70",
            "name": "Discrete Mathematics and Probability Theory",
            "description": "Meets M, W, F in Dwinelle 132 (3:00PM - 6:00PM)",
            "sizeLimit": 10
        },
    ]
    
    // State to hold groups data (replace with dummyGroups for testing)
    const [groups, setGroups] = useState(dummyGroups);
    console.log(groups)

    // useEffect(() => {
    //     console.log("Fetching groups...")
    //     axios
    //     .get(url)
    //         .then((response) => {
    //             console.log("Data fetched:")
    //             console.log(response.data);
    //             setGroups(response.data);
    //         });
    // }, [toggle]);

    // TODO: use tailwind grid instead of flexbox (low priority)
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 h-fit">
            {groups.map(group => (
                <Group key={group.id} data={group} joinable={joinable}/>
            ))}
        </div>
    );
};

export default GroupGallery;


