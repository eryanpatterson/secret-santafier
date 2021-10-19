import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "./modal";


export default function Register() {
    const [groupName, setGroupName] = useState('');
    const [email, setEmail] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [displayModal, setModal] = useState(false);
    const [groupId, setGroupId] = useState('');
    const body = {
        groupName: groupName,
        email: email,
        groupSize: groupSize
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(body.email);

        const register = await fetch('/group-register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        
        if (register.status === 200) {
            const response = await register.json()
                .then(data => {
                    setGroupId(data.groupId._id)
                    console.log(data.groupId._id)
                });
            setModal(true)
            return {success: true};
            
        } else {
            console.log(register.text())
            return {success: false}
        }
    }

    return (
        <>
            {displayModal === true ? <Modal groupId={groupId} /> : null}
            <form onSubmit={(e) => {handleSubmit(e)}} className="text-gray-600 font-bold mt-5">
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Group Name
                        </label>
                    </div>
                    <div>
                        <input value={groupName} onChange={(e) => setGroupName(e.target.value)} className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Email
                        </label>
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3">
                        <label>
                            Number of Participants
                        </label>
                    </div>
                    <div>
                        <input value={groupSize} onChange={(e) => setGroupSize(e.target.value)} type='number' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center p-3 ">
                    <button className="btn bg-red-500 px-2 py-1 rounded-md font-display font-bold text-white text-lg" type="submit" value="Submit">SUBMIT</button>
                </div>
            </form>        
        </>
    )
}