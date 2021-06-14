import React from 'react'

export const ListItem = ({user}) => {
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.height}</h3>
        </div>
    );
};