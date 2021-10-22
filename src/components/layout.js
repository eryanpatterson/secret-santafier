

export default function Layout({children}) {
    const narrowStripe = "h-2 w-full shadow-md bg-red-500";
    
    return (
        <main className="flex justify-center items-center h-screen bg-green-400">
            <div className='w-full max-w-lg'>
                <div className='h-auto  bg-white shadow-lg rounded-lg pt-6 text-white'>
                    <div className={narrowStripe}></div>
                    <div className="h-20 w-full bg-red-500 mt-2 mb-2 flex justify-center items-center shadow-md">
                        <h1 className="text-white font-bold font-display text-4xl">SECRET SANTA-FIER</h1>
                    </div>
                    <div className={narrowStripe}></div>
                    {children}
                </div>
            </div>
        </main>
    )
}