import React, { useEffect, useState } from 'react';
import Group from './Group'; // Import your Group component
import axios from "axios";
//TODO: Add search bar and searching via filter
const GroupGallery = ({toggle}) => {
    
    // State to hold groups data (replace with dummyGroups for testing)
    const [groups, setGroups] = useState([]);

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


