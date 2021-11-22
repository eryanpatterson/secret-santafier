import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import Form from "./sub-components/form";
import Modal from "./sub-components/modal";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

function Button(props) {
    return (
    <button onClick={(e) => props.function(!props.value)} className="w-36 mt-6 transition-all duration-500 rounded-md bg-red-500 border-2 border-white p-3 font-semibold text-white hover:bg-green-400">{props.text}</button>
    )
}

export default function Group() {
    const [showForm, setForm] = useState(false);
    const [token, setToken] = useState(false);
    const [tokenError, setTokenError] = useState(false);
    const [displayModal, setModal] = useState(0);
    
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
                setTokenError(true);
            }
        }
        fetchData();
    }, [queryToken])
    console.log(token);
    return (
    <>    
        <div className="flex flex-col items-center justify-center p-10 text-gray-700 font-bold">
        { displayModal ? <Modal heading="Address Added!" body="You will get an email once all group members have confirmed." /> : null }
            {tokenError ? <Modal heading="Oops!" body="Your token is invalid; please double-check the url you received in your email." /> : 
            <h3>Email verification successful!</h3> }
            {
                token ? <Button value={showForm} function={setForm} text="Enter Mailing Address" /> : <Button value={displayModal} function={setModal} text="Next" />
            }
        </div>
        <Form token={token} display={showForm} />
    </>
    )
}