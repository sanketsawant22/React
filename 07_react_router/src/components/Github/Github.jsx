import React, { useEffect, useState } from "react";

export default function GitHub() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((Response) => Response.json())
        .then((Response) => setData(Response))
        
    }, [GitHub])

    return (
        <>
            <div className="flex flex-row mx-auto my-5" style={{width : "50%"}}>
                <img src={data.avatar_url} alt="Profile" className="w-1/3 pr-4"/>
                <div className="flex flex-col border-x borderx pl-4 pr-2 text-left space-y-1">
                    <h1 className="text-3xl">{data.name}</h1>
                    <h2>Followers : {data.followers}</h2>
                    <h2>YouTube : <a href={data.blog} className="text-blue-800">Chai Aur Code</a></h2>
                    <div className="flex flex-row space-x-1  text-sm">
                        <h2 className="font-medium">About: </h2>
                        <h2 className="text-left">{data.bio}</h2>
                    </div>
                </div>

            </div>
        </>
    )
}