import React, { useState } from 'react'
import {ListItem} from './ListItem'

export const ListComponent = () =>{
    const [array, setarray] = useState([
        { name: "daze", age: "32", height: "184" },
        { name: "flower", age: "42", height: "174" },
        { name: "sun", age: "12", height: "174" },
    ]);

    return(
        <div>{array.map((user, index) => {
            return <ListItem user={user} key={index}></ListItem>;
        })}</div>
    );
}