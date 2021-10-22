import { useState } from "react"

export default function Form({ groupId }) {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [email, setEmail] = useState('');
    
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch('/user-add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                groupId: groupId
            }),
        })
    }

    return (
    <div className="bg-red-500 rounded-b-lg w-full p-5 font-bold">        
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="flex flex-col">    
                <label>First name</label>
                <input className="rounded py-1 text-gray-700 font-semibold" value={firstName} onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div className="flex flex-col">  
                <label>Last name</label>
                <input className="rounded py-1 text-gray-700 font-semibold" value={lastName} onChange={(e) => setLast(e.target.value)} />
            </div>
            <div className="flex flex-col">    
                <label>Email</label>
                <input className="rounded py-1 text-gray-700 font-semibold" value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
                <div className="w-full flex justify-end">
                    <button className="p-2 bg-green-500 mt-3 mr-1 rounded-md text-lg font-bold" value='Submit' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    </div>
    )
}