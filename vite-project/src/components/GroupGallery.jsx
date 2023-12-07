import React, { useEffect, useState } from 'react';
import Group from './Group'; // Import your Group component
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const GroupGallery = ({ url, toggle, joinable, filter }) => {
    const { user } = useUser();

    // State to hold groups data
    const [groups, setGroups] = useState([]);

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
            });
    }, [toggle, reload]);

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
