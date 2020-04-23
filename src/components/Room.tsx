import React from 'react'
import { Link } from 'react-router-dom'; 
import { IRoom } from '../model/IRoom';

interface IRoomProps {
    room : IRoom;
}

const Room = ({room} : IRoomProps) => {
    console.log("DD " + room);
    const {name, slug, images, price} = room;
    return (
        <article className="room">
            {name}
        </article>
    )
}

export default Room;
