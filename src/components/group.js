import { useState, useEffect } from "react";
import Form from "./sub-components/form";

export default function Group() {
    const [showForm, setForm] = useState(false);
    const [token, setToken] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const urlQueryParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlQueryParams.entries());
    
    useEffect( async () => {
        const res = await fetch('/verify-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                token: params.token
            }),
        });

        if (res.status === 200) {
            res.json()
            .then(data => setToken(data.token))
        } else {
            setErrMessage("Token Invalid");
        }
    }, [params.token])

    return (
    <>    
        <div className="flex flex-col items-center justify-center p-10 text-gray-700 font-bold">
            {errMessage ? <h3>{errMessage}</h3> : 
            <h3>Email verification successful!</h3> }
            <button onClick={(e) => setForm(!showForm)} className="transition-all duration-500 rounded-md bg-red-500 border-2 border-white p-3 font-semibold text-white hover:bg-green-400">Enter Mailing Address</button>
        </div>
        <Form token={token} display={showForm} />
    </>
    )
}