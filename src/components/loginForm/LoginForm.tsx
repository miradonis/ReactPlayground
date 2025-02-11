import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginForm.css";
import users from "../../data.json";



const LoginForm: React.FC = () => {

    // inputelemente holen und useRef verwenden um einen verweis auf das element zu erzeugen. der startwert ist null. der name der variable ist im jeweiligen inputfeld als ref angegeben um die verbindung zu erzeugen
    // const userName = useRef<HTMLInputElement>(null);
    // const userPassword = useRef<HTMLInputElement>(null);
    const [userName, setuserName] = useState("");
    const [userPassword, setuserPassword] = useState("");

    console.log({ userName }, { userPassword });

    // Hook für die weiterleitung
    const navigate = useNavigate();

    const checkUserInputs = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(users);

        // prüfen ob der username bereits existiert 
        const includesUserDates = users.find((user) => user.username === userName);
        console.log({ includesUserDates });

        if ((includesUserDates?.username === userName) && (includesUserDates?.password === userPassword)) {
            console.log("Sche dasd do bist: ", userName);
            navigate("/dashboard");
        } else {
            console.log("Di gibts no ned. Registrier di moi.");
            if (userName && userPassword) {
                // wird natürlich nicht in die data.json geschrieben da sie statisch ist. die änderungen sind im array (im browser) sichtbar
                users.push({
                    "username": userName,
                    "password": userPassword
                });
            }

        }
        console.log(users);
    }


    return (
        <article>
            <h2>Login or Sign up</h2>
            <form onSubmit={checkUserInputs}>
                <div className="user-login-wrapper">
                    <input type="text" placeholder="Username" id="username" onChange={(event) => {
                        setuserName(event?.target.value);
                    }} />
                </div>

                <div className="user-login-wrapper">
                    <input type="password" placeholder="Password" id="password" onChange={(event) => {
                        setuserPassword(event?.target.value)
                    }} />
                </div>
                <a href="">Don´t have an account</a>
                <button type="submit">Login</button>
            </form>
        </article>
    )

}

export default LoginForm;