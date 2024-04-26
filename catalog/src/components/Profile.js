import React, { useState } from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AuthDetails from "./AuthDetails";
import '../Profile.scss';

function Profile() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);

    const toggleVisibility = () => {
        setIsSignUpVisible(!isSignUpVisible);
    };

    return (
        <div className="mainProfile">
              <pre className="error">SyntaxError: Invalid or unexpected token
    at https://herotofu.com/haml.js:657:29
    at execute (https://herotofu.com/haml.js:663:7)
    at Function.render (https://herotofu.com/haml.js:649:12)
    at n (https://herotofu.com/_next/static/chunks/7436.89eb7bc0cc98238b.js:1:287)
    at https://herotofu.com/_next/static/chunks/7436.89eb7bc0cc98238b.js:1:798
    at oO (https://herotofu.com/_next/static/chunks/framework-1f10d657052901bd.js:25:84122)
    at uB (https://herotofu.com/_next/static/chunks/framework-1f10d657052901bd.js:25:113185)
    at https://herotofu.com/_next/static/chunks/framework-1f10d657052901bd.js:25:111571
    at uO (https://herotofu.com/_next/static/chunks/framework-1f10d657052901bd.js:25:111637)
    at u_ (https://herotofu.com/_next/static/chunks/framework-1f10d657052901bd.js:25:96266)</pre>
            {isSignUpVisible ? <SignUp /> : (
                <>
                    <SignIn />
                    <AuthDetails />
                </>
            )}
            <button className="btnSwap" onClick={toggleVisibility}>
                {isSignUpVisible ? 'Sign In' : 'Sign Up'}
            </button>
        </div>

    );
}

export default Profile;
