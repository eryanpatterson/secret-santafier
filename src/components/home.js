import { Link } from "react-router-dom";

export default function Home() {
    const narrowStripe = "h-2 w-full shadow-md bg-red-500";

    return (
    <>
        <div className={narrowStripe}></div>
        <div className="h-20 w-full bg-red-500 mt-2 mb-2 flex justify-center items-center shadow-md">
            <h1 className="text-white font-bold font-display text-4xl">SECRET SANTA-FIER</h1>
        </div>
        <div className={narrowStripe}></div>
        <div className="flex justify-center items-center text-xl text-red-500 font-bold h-24">
            <h2>Choose an option below</h2>
        </div>
        <div className={narrowStripe}></div>
        <div className="h-20 flex flex-row-reverse justify-evenly items-center mt-2 mb-2 bg-red-500 shadow-md">
            <Link to="/submit">
                <button className="btn bg-white shadow-md font-bold px-2 py-3 rounded-md text-lg text-green-600">
                    Create Group
                </button>
            </Link>
            <Link to="/group">
                <button className="btn bg-white shadow-md font-bold px-2 py-3 rounded-md text-lg text-red-500">
                    Find Group
                </button>        
            </Link>
        </div>
        <div className={narrowStripe}></div>
    </>
    )
}