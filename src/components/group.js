import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import Form from "./sub-components/form";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Group() {
    const [showForm, setForm] = useState(false);
    const [token, setToken] = useState('');
    const [errMessage, setErrMessage] = useState('');
    
    const queryToken = useQuery().get("token");
    console.log(queryToken);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/verify-email', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    token: queryToken
                }),
            });

            if (res.status === 200) {
                res.json()
                .then(data => setToken(data.token))
            } else {
                setErrMessage("Token Invalid");
            }
        }
        fetchData();
    }, [queryToken])

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