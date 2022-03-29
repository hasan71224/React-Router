import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{id, name, username, email}=props.friend;

    const navigate = useNavigate();

    const showFriendDetails=()=>{
        const path = `/friend/${id}`;
        navigate(path)
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friends/' + id}>Go Details</Link>
            <button onClick={showFriendDetails}>{username} Id: {id}</button>
        </div>
    );
};

export default Friend;