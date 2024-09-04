import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext);
    const {setPass} = useContext(UserContext);

    const handleClick = (e) => {
        e.preventDefault()
        setUser(username)
        setPass(password)
    }

    return (
        <>
            <div>
                <h2>Login</h2>

                <input type="text" 
                value={username} 
                onChange={(e) => {
                    setUsername(e.target.value)
                }} 
                placeholder="Username"/>

                <br />
                
                <input type="password" 
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                placeholder="Password" />

                <br />

                <button onClick={handleClick}>Submit</button>
            </div>
        </>
    )
} 