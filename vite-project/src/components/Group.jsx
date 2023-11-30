import React from 'react';

const Group = ({ data }) => {
    return (
        <div className="group-box" style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>{data.name}</h3>
            <p><strong>ID:</strong> {data.id}</p>
            <p><strong>Description:</strong> {data.description}</p>
            <p><strong>Member Count:</strong> {data.memberCount}</p>
        </div>
    );
};

export default Group;
