import { useHistory } from "react-router-dom";

export default function Modal({heading, body}) {
    let history = useHistory();

    return (
        
        <div className="fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="modal">
    
        <div className=" p-5 border w-96 shadow-lg bg-white">
            <div className="mt-3 text-center">
                <div className="h-2 w-full shadow-md bg-red-500"></div>
                <div className="h-16 w-full bg-red-500 mt-2 mb-2 flex justify-center items-center shadow-md">
                    <h3 class="text-2xl font-display text-white">{heading}</h3>
                </div>
                <div className="h-2 w-full shadow-md bg-red-500"></div>
                <div className="text-gray-800 font-semibold p-3">
                    <p>{body}</p>
                </div>
		        <div class="items-center px-4 py-3">
			        <button
				        id="ok-btn"
				        class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                        onClick={(e) => {history.push('/')}}
			        >
				        Close
			        </button>
		        </div>
            </div>
        </div>
        </div>
    )
}