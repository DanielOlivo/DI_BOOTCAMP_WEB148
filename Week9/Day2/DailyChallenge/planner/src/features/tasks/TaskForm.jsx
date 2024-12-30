import { useSelector, useDispatch } from "react-redux";

export default function TaskForm(){

    

    return (
        <div
            className="absolute w-full h-full flex flex-col justify-center items-center bg-gray-300 bg-opacity-10" 
        >
            <div
                className="w-1/3 h-1/3 bg-white rounded flex flex-col" 
            >
                <h1>Header</h1>
                <input />
                <h3>Details</h3>
                <input />
                <div
                    className="flex flex-row" 
                >
                    <button>Save</button>
                    <button>Discard</button>
                </div>
            </div>

        </div>
    )
}