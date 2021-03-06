import { useState, useEffect } from "react";
import Modal from "./sub-components/modal";


export default function Register() {
    const [groupName, setGroupName] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState('');
    const [exchangeDate, setDate] = useState('');
    const [spendLimit, setLimit] = useState('');
    const [displayModal, setModal] = useState(false);
    const [groupSize, setGroupSize] = useState(1);
    const [memberInfo, setInputs] = useState('');
    const [useAddress, setAddress] = useState(false);
    const [errMessage, setErrMsg] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        const date = Date.parse(exchangeDate);
        const dateString = new Date(date).toLocaleString('default', { month: 'long', year: 'numeric', day: 'numeric' });
        for (let i = 0; i < groupSize; i++) {
            members.push({
                name: document.getElementById(`Member ${i} name`).value,
                email: document.getElementById(`Member ${i} email`).value
            })
        }
        console.log(useAddress);
        const body = {
            group: {
                name: groupName,
                admin: admin,
                adminEmail: email,
                exchangeDate: dateString,
                spendLimit: spendLimit,
                useAddress: useAddress,
            },
            members: members
        }

        const response = await fetch('/api/group-register', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body),
        });

        const register = await response.json();

        if (response.status === 200) {
            setModal(true)
            return {success: true};
        } else setErrMsg(register.message); 
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
                        {errMessage && <p className="text-red-500 text-center">{errMessage}</p>}
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
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Spending Limit
                        </label>
                    </div>
                    <div>
                        <input value={spendLimit} onChange={(e) => setLimit(e.target.value)} type='number' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Gift Exchange Date
                        </label>
                    </div>
                    <div>
                        <input value={exchangeDate} onChange={(e) => setDate(e.target.value)} type='date' className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Include Mailing Address?
                        </label>
                    </div>
                    <div> 
                        <input onChange={(e) => setAddress(!useAddress)} type='checkbox' className="h-6 w-6 bg-gray-100 border-2 rounded-md mt-3" />
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