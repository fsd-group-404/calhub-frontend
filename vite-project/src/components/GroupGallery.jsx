import React, { useEffect, useState } from 'react';
import Group from './Group'; // Import your Group component
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const GroupGallery = ({ url, toggle, joinable, filter }) => {
    const { user } = useUser();
    // make some dummy group data (two groups)
    let dummyGroupData = [
        {
            "id": 1,
            "code": "CS61A",
            "name": "The Beauty and Joy of Computing",
            "description": "CS 61A is an introduction to computer science that teaches students how to think more methodically and how to solve problems more effectively. This course covers a broad range of topics from cryptography, to machine learning, to software engineering and more.",
            "sizeLimit": 6,
            
        },
        {
            "id": 2,
            "code": "CS61B",
            "name": "Data Structures",
            "description": "CS 61B is a course about data structures and advanced programming techniques. It is the successor to CS 61A, the first course in the three-course “golden sequence” of Computer Science at Berkeley. This course will introduce you to some of the most widely used and important data structures in programming.",
            "sizeLimit": 5,
        }
    ]

    //replace [] with dummyGroupData to see the dummy data
    const [groups, setGroups] = useState(dummyGroupData);

    // New state for loading status
    const [isLoading, setIsLoading] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setIsLoading(true); // Start loading
        console.log("Fetching groups...");
        axios.get(url)
            .then((response) => {
                console.log("Data fetched:");
                console.log(response.data);
                setGroups(response.data);
                setIsLoading(false); // End loading
            }).catch((error) => {setIsLoading(false); console.log(error);})}, [toggle, reload]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-start h-[90vh] pt-10">
                <span className="loading loading-spinner loading-lg text-primary"></span>

            </div>
        );
    }

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 h-fit">
            {groups.filter(group => 
                filter.trim() === "" || 
                group.code.toLowerCase().replace(/\s/g, '') === filter.toLowerCase().replace(/\s/g, '')
            ).map(filteredGroup => (
                <Group key={filteredGroup.id} data={filteredGroup} joinable={joinable} onReload={setReload}/>
            ))}
        </div>
    );
};

export default GroupGallery;
