import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [copyPasswordError, setCopyPasswordError] = useState("");
    const [error, setError] = useState("");

    function validateEmail(email) {
        // Валідація email
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(String(email).toLowerCase());
    }

    function register(e) {
        e.preventDefault();

        // Перевірка чи email відповідає формату
        if (!validateEmail(email)) {
            setEmailError("Incorrect email");
            return;
        } else {
            setEmailError("");
        }

        // Перевірка паролів
        if (password === "") {
            setPasswordError("Password cannot be empty");
            return;
        } else if (password.length < 6 || password.length > 15) {
            setPasswordError("The password must have at least 6 and no more than 15 characters");
            return;
        } else {
            setPasswordError("");
        }

        // Перевірка співпадіння паролів
        if (copyPassword !== password) {
            setCopyPasswordError("Passwords didn't match");
            return;
        } else {
            setCopyPasswordError("");
        }

        // Реєстрація користувача
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setError("");
                setEmail("");
                setCopyPassword("");
                setPassword("");
            })
            .catch((error) => console.log(error));
    }

    return (
        <div>
            <form onSubmit={register}>
                <h2>Create an account</h2>
                <input
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                <input
                    placeholder="Please enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
                <input
                    placeholder="Please enter your password again"
                    value={copyPassword}
                    onChange={(e) => setCopyPassword(e.target.value)}
                    type="password"
                />
                {copyPasswordError && <p style={{ color: "red" }}>{copyPasswordError}</p>}
                <button>Create</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
