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
    <form onSubmit={handleSubmit}>
        <label>First name</label>
        <input value={firstName} onChange={(e) => setFirst(e.target.value)} />
        <label>Last name</label>
        <input value={lastName} onChange={(e) => setLast(e.target.value)} />
        <label>Email</label>
        <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
        <input value='Submit' type='submit' />
    </form>
    )
}