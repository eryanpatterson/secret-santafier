import { useState, useEffect } from "react";
import Form from "./sub-components/form";
//import facebook from "../lib/facebook";

export default function Group() {
    const [groupId, setId] = useState('');
    const [showForm, setForm] = useState(false);
    const urlQueryParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlQueryParams.entries());

    useEffect(() => {
        params.id && setId(params.id);
    })
    
    async function faceBookLogin() {
        console.log("Hiyadeheydayadoooo!!!!??")
        const res = await fetch('/auth/facebook/callback')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
    <>    
        <div className="flex flex-col items-center justify-center p-10 text-gray-700 font-bold">
            <label>Group Id:</label>
            <input className="font-bold border-2 p-2 my-2 rounded-md" type='text' value={groupId} onChange={(e) => setId(e.target.value)} />
            {//<button onClick={faceBookLogin} className="rounded-md bg-blue-300">Continue with Facebook</button>
            }<button onClick={(e) => setForm(!showForm)} className="transition-all duration-500 rounded-md bg-red-500 border-2 border-white p-3 font-semibold text-white hover:bg-green-400">Enter details manually</button>
        </div>
        <Form groupId={groupId} display={showForm} />
    </>
    )
}