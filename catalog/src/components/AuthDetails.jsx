import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
    const [authUser, setAuthUset] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUset(user);
            } else {
                setAuthUset(null);
            }
        });
        return () => {
            listen();
        };
    }, []);
    function userSignOut() {
        signOut(auth)
            .then(() => console.log("success"))
            .catch((e) => console.log(e));
    }
    return (
        <div>
            {authUser ? (
                <div>
                    <p>{`Signed in as ${authUser.email.split('@')[0]}`}</p>
                    <button style={{ margin: '10px' }} onClick={userSignOut}>Sign Out</button>
                </div>
            ) : (
                <p style={{ marginTop: '20px' }}>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;