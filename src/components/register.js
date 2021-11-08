import { useState, useEffect } from "react";
import Modal from "./sub-components/modal";


export default function Register() {
    const [groupName, setGroupName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [admin, setAdmin] = useState('');
    const [displayModal, setModal] = useState(false);
    const [groupSize, setGroupSize] = useState(1);
    const [memberInfo, setInputs] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        for (let i = 0; i < groupSize; i++) {
            members.push({
                name: document.getElementById(`Member ${i} name`).value,
                email: document.getElementById(`Member ${i} email`).value
            })
        }
        console.log("Form submit: " + admin);
        const body = {
            group: {
                name: groupName,
                admin: admin,
                adminEmail: email,
                pwd: pwd
            },
            members: members
        }

        const register = await fetch('/group-register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        console.log(register.status)
        if (register.status === 200) {
            setModal(true)
            return {success: true};
        } 
    }

    const members = [];

    useEffect(() => {
        const memberInputs = [];
        for (let i = 0; i < groupSize; i++) {
            memberInputs.push({name: `Member ${i} name`, email: `Member ${i} email`})
        } 
        setInputs(memberInputs.map(({name, email}) => (
            <div key={name} className="flex items-center justify-around mb-2">
                <div>    
                    <div>
                        <label>
                            Name
                        </label>
                    </div>
                    <div>
                        <input name={name} id={name} type='text' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div>    
                    <div>
                        <label>
                            Email
                        </label>
                    </div>
                    <div>
                        <input name={email} id={email} type='email' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
            </div>
        ))
    )}, [groupSize]);
            
    return (
        <>
            {displayModal === true ? <Modal heading="Group Added!" body="You will get an email when all group members have confirmed." /> : null}
            <form onSubmit={(e) => {handleSubmit(e)}} className="text-gray-600 font-bold mt-5">
            <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Name
                        </label>
                    </div>
                    <div>
                        <input type="text" value={admin} onChange={(e) => setAdmin(e.target.value)} className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Group Name
                        </label>
                    </div>
                    <div>
                        <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} className="bg-gray-100 border-2 rounded-md" />
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
                <div className="flex justify-center mb-4">
                    <div className="w-1/3">
                        <label>
                            Group Password
                        </label>
                    </div>
                    <div>
                        <input value={pwd} onChange={(e) => setPwd(e.target.value)} type='password' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex flex-col flex-wrap justify-around p-2">
                    
                    {memberInfo}
                    <div className="flex justify-center mt-2">
                        <div className="flex items-center w-1/5 justify-around">
                            <button onClick={(e) => setGroupSize(groupSize + 1)} type="button" className="material-icons-outlined text-white bg-green-400 rounded-md p-1">add</button>
                            <button onClick={(e) => setGroupSize(groupSize - 1)} type="button" className="material-icons-outlined text-white bg-red-500 rounded-md p-1">remove</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 ">
                    <button className="btn bg-red-500 px-2 py-1 rounded-md font-display font-bold text-white text-lg" type="submit" value="Submit">SUBMIT</button>
                </div>
            </form>        
        </>
    )
}