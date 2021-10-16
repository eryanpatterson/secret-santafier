

export default function Register() {
    
    return (
        <>
            <form className="text-gray-600 font-bold mt-5">
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Group Name
                        </label>
                    </div>
                    <div>
                        <input className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center mb-5">
                    <div className="w-1/3">
                        <label>
                            Email
                        </label>
                    </div>
                    <div>
                        <input className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3">
                        <label>
                            Number of Participants
                        </label>
                    </div>
                    <div>
                        <input className="bg-gray-100 border-2 rounded-md" />
                    </div>
                </div>
                <div className="flex justify-center p-3 ">
                    <button className="btn bg-red-500 px-2 py-1 rounded-md font-display font-bold text-white text-lg" type="submit" value="Submit">SUBMIT</button>
                </div>
            </form>        
        </>
    )
}