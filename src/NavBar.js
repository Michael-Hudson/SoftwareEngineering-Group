// src/components/NavBar.js

// standard react components
import React from 'react';
import { useAuth0 } from './react-auth0-wrapper';
import { Link } from 'react-router-dom';


// this is the NavBar component
const NavBar = () => {
    // Auth0 stuff, to customize the view, depending on if the user is logged
    // in (isAuthenticated = true) or not (=false)
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    // make the Navigation Bar, which will appear at the top of the screen
    // TODO:  This is ugly, definitely need to improve it
    return (
        <div className="NavBar">
            {/* If not logged in, provide a Log in button
       * loginWithRedirect is provided by src/react-auth0-wrapper.js
       * links to about page and home is provided
       */}
            {!isAuthenticated && (
                <div className="text">
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/about">About</Link>&nbsp;
                    <button className='up' onClick={() => loginWithRedirect({})}>Log in</button>
                </div>
            )}

            {/* If already logged in, provide a Log out button
       * logout is provided by src/react-auth0-wrapper.js
       * links to profile and studenthomepage is provided
       */}
            {isAuthenticated && (
                <div className="text">
                    <Link to="/profile">Profile</Link>&nbsp;
                    <Link to="/ChatRoom">Go To Chat Room</Link>&nbsp;
                    <button onClick={() => logout()}>Log out</button>
                </div>

            )}
        </div>
    );
};

//export the NavBar component
export default NavBar;
