import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function Profile() {

    const {user} = useContext(UserContext);
    const {pass} = useContext(UserContext);

    if (!user) {
        return (
            <>
                <h2>please Login</h2>
            </>
        )
    }

    else {
        return (
            <>
                <h2>Welcome {user}</h2>
                <h3>Your password is : {pass}</h3>
            </>
        )
    }
}