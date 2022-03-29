import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const {postId}=useParams();
    const [post, setPost]=useState([])
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])
    return (
        <div>
            
            <h1>this is post details for:{postId}</h1>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;