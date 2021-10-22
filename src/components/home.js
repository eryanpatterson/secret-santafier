import { Link } from "react-router-dom";

export default function Home() {
    const narrowStripe = "h-2 w-full shadow-md bg-red-500";

    return (
    <>
        
        <div className="flex justify-center items-center text-xl text-red-500 font-bold h-24">
            <h2>Choose an option below</h2>
        </div>
        <div className={narrowStripe}></div>
        <div className="h-20 flex flex-row-reverse justify-evenly items-center mt-2 mb-2 bg-red-500 shadow-md">
            <Link to="/register">
                <button className="transition-all duration-500 bg-white shadow-md font-bold px-2 py-3 rounded-md text-lg text-green-600 border-2 border-white hover:bg-green-400 hover:border-green-400 hover:text-white">
                    Create Group
                </button>
            </Link>
            <Link to="/group">
                <button className="transition-all duration-500 bg-white shadow-md font-bold px-2 py-3 rounded-md text-lg text-red-500 border-2 border-white hover:bg-red-500 hover:text-white">
                    Find Group
                </button>        
            </Link>
        </div>
        <div className={narrowStripe}></div>
    </>
    )
}