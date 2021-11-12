import { Link } from "react-router-dom";

export default function Home() {
    const narrowStripe = "h-2 w-full shadow-md bg-red-500";

    return (
    <>
        
        <div className="flex justify-center items-center text-xl text-red-500 font-bold h-24">
            <h2>Create a Group to begin</h2>
        </div>
        <div className={narrowStripe}></div>
        <div className="h-20 flex flex-row-reverse justify-evenly items-center mt-2 mb-2 bg-red-500 shadow-md">
            <Link to="/register">
                <button className="transition-all duration-500 hover:bg-white shadow-md font-bold px-2 py-3 rounded-md text-lg hover:text-red-500 border-2 border-white bg-red-500 text-white">
                    Create Group
                </button>
            </Link>
        </div>
        <div className={narrowStripe}></div>
    </>
    )
}