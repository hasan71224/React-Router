import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    // const params = useParams();
    const {friendId}=useParams()
    const [friend, setFriend] = useState([])
    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then (res => res.json())
        .then (data=> setFriend(data))
    },[])
    
    return (
        <div>
            {/* <h1>This is Friends Details: {params.friendId}</h1> */}
            <h1>This is Friends Details: {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>City: {friend.address?.city}</h3>
            <h3>Lat: {friend.address?.geo?.lat}</h3>
        </div>
    );
};

export default FriendDetails;