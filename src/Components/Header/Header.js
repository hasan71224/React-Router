import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome To My Fancy Routing</h1>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <Link to="/posts" >Post</Link>
            <CustomLink to="/about">About</CustomLink>
        </div>
    );
};

export default Header;