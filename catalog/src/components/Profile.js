import React, { useState } from 'react';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import AuthDetails from "./AuthDetails";
import '../css/Profile.scss';

function Profile() {
    const [isSignUpVisible, setIsSignUpVisible] = useState(true);

    const toggleVisibility = () => {
        setIsSignUpVisible(!isSignUpVisible);
    };

    return (
        <div className="mainProfile">
              <pre className="error"></pre>
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
