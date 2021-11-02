import { useState, useEffect } from "react";
import Form from "./sub-components/form";
//import facebook from "../lib/facebook";

export default function Group() {
    const [showForm, setForm] = useState(false);
    const [token, setToken] = useState('');
    const urlQueryParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlQueryParams.entries());

    useEffect(() => {
        fetch('/verify-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                token: params.token
            }),
        }).then(res => res.json())
        .then(data => setToken(data.token))
    }, [params.token])

    return (
    <>    
        <div className="flex flex-col items-center justify-center p-10 text-gray-700 font-bold">
            <h3>Email verification successful!</h3>
            <button onClick={(e) => setForm(!showForm)} className="transition-all duration-500 rounded-md bg-red-500 border-2 border-white p-3 font-semibold text-white hover:bg-green-400">Enter Mailing Address</button>
        </div>
        <Form token={token} display={showForm} />
    </>
    )
}