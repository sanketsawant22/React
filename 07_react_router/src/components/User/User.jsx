import React from "react";
import { useParams } from "react-router-dom";

export default function User() {

    const {userID} = useParams()

    return (
        <>
            <h1 className="bg-gray-500 text-3xl py-5 text-white  ">User is : {userID}</h1>
        </>
    )
}