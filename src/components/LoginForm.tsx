import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/LoginForm.css";
import users from "../data.json";



const LoginForm: React.FC = () => {

    // inputelemente holen und useRef verwenden um einen verweis auf das element zu erzeugen. der startwert ist null. der name der variable ist im jeweiligen inputfeld als ref angegeben um die verbindung zu erzeugen
    const userName = useRef<HTMLInputElement>(null);
    const userPassword = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const checkUserInputs = (event: React.FormEvent) => {
        event.preventDefault();

        console.log(users);

        // prüfen ob der username bereits existiert 
        const includesUserDates = users.find((user) => user.username === userName.current?.value);
        console.log({ includesUserDates });

        if ((includesUserDates?.username === userName.current?.value) && (includesUserDates?.password === userPassword.current?.value)) {
            console.log("Sche dasd do bist: ", userName.current?.value);
            navigate("/dashboard");
        } else {
            console.log("Di gibts no ned. Registrier di moi.");
            if (userName.current?.value && userPassword.current?.value) {
                // wird natürlich nicht in die data.json geschrieben da sie statisch ist. die änderungen sind im array (im browser) sichtbar
                users.push({
                    "username": userName.current.value,
                    "password": userPassword.current.value
                });
            }

        }
        console.log(users);
    }


    return (
        <article>
            <form onSubmit={checkUserInputs}>
                <div>
                    <label htmlFor="username">Wia hoast: </label>
                    <input type="text" id="username" ref={userName} />
                </div>

                <div>
                    <label htmlFor="password">Passwort: </label>
                    <input type="password" id="password" ref={userPassword} />
                </div>
                <button type="submit">I geh moi schaun obs di scho gibt</button>
            </form>
        </article>
    )

}

export default LoginForm;