import { useHistory } from "react-router-dom";

export default function Modal({groupId}) {
    let history = useHistory();
    const shareLink = "localhost:3000/group?id=" + groupId;

    function copy() {
        const copyLink = document.getElementById("groupId");
        copyLink.select();
        copyLink.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyLink.value);
    }

    return (
        
        <div className="fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="modal">
    
        <div className=" p-5 border w-96 shadow-lg bg-white">
            <div className="mt-3 text-center">
                <div className="h-2 w-full shadow-md bg-red-500"></div>
                <div className="h-16 w-full bg-red-500 mt-2 mb-2 flex justify-center items-center shadow-md">
                    <h3 class="text-2xl font-display text-white">Group Added!</h3>
                </div>
                <div className="h-2 w-full shadow-md bg-red-500"></div>
                <div className="text-gray-800 font-semibold p-3">
                    <p> Share the link below with your group. </p>
                </div>
		        <div class="flex justify-evenly mt-2 px-7 py-3 text-gray-600">
			        <input type="text" value={shareLink} id="groupId" className="border-2 rounded-md p-2" />
                    <button onClick={copy}><span className="material-icons-outlined">content_copy</span></button>
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