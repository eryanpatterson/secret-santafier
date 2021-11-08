import { useState } from "react"
import { useHistory } from "react-router";
import Modal from "./modal";

export default function Form({ token, display }) {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [displayModal, setModal] = useState(0);

    const history = useHistory();
    
    let formDisplay;
    display ? (formDisplay = "transition-all h-80 ease-in-out duration-700 bg-red-500 rounded-b-lg w-full p-5 font-bold")
         : (formDisplay = "transition-all h-0 opacity-0 ease-in-out duration-700 bg-red-500 rounded-b-lg w-full p-5 font-bold ")
    
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch('/address', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: token,
                address: `${street} ${city}, ${state} ${zip}`
            }),
        });
        if (res.status === 200) {
            setModal(true);
            return
        } else {
            alert("An error occurred.");
        }
    }

    return (
    <div className={formDisplay}>
    { displayModal ? <Modal heading="Address Added!" body="You will get an email once all group members have confirmed." /> : null }       
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="flex flex-col">    
                <label>Street or Box Number</label>
                <input className="rounded p-1 text-gray-700 font-semibold focus:outline-green" value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div className="flex flex-col">  
                <label>City</label>
                <input className="rounded p-1 text-gray-700 font-semibold focus:outline-green" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="flex flex-col">  
                <label>State</label>
                <input className="rounded p-1 text-gray-700 font-semibold focus:outline-green" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div className="flex flex-col">    
                <label>Postal Code</label>
                <input className="rounded p-1 text-gray-700 font-semibold focus:outline-green" value={zip} type='tel' onChange={(e) => setZip(e.target.value)} />
                <div className="w-full flex justify-end">
                    <button className="transition-all duration-500 p-2 border-white border-4 mt-3 mr-1 rounded-md text-lg font-bold hover:bg-white hover:text-red-500" value='Submit' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    </div>
    )
}