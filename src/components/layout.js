

export default function Layout({children}) {
    return (
        <main className="flex justify-center items-center h-screen bg-green-400">
            <div className='w-full max-w-lg'>
                <form className='h-96 bg-white shadow-lg rounded-lg pt-6 pb-8  text-white'>
                {children}
                </form>
            </div>
        </main>
    )
}