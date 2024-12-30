import { useRef, useState } from "react"
import {edit, remove} from './taskSlice'
import { useDispatch } from "react-redux"


export default function Task(props){

    const titleRef = useRef()
    const detailsRef = useRef()
    const dispatch = useDispatch()

    const [onEdit, setOnEdit] = useState(false);

    const Box = (task) => {
        const {title, details} = task
        return (
            <div
                className='border-2 rounded border-gray-200'  
                onDoubleClick={(e) => setOnEdit(true)}
                draggable='true'
                onDragStart={(e) => {
                    e.dataTransfer.setData('text/plain', JSON.stringify(task))
                    console.log(e.dataTransfer);
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    console.log('onDrop')
                }}
            >
                <h2
                    className='text-3xl' 
                >{title}</h2>
                <p>{details}</p>
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(remove(task.id))
                    }} 
                >delete</button>
            </div>
        )
    }

    const Form = (task) => {
        return (
            <div
                className="border-2 bg-gray-200 rounded flex flex-col" 
            >
                {/* <h1>Title</h1> */}
                <input ref={titleRef} defaultValue={task.title} placeholder="Title"/>
                {/* <h3>Details</h3> */}
                <input ref={detailsRef} defaultValue={task.details} placeholder="Details"/>
                <div
                    className="flex flex-row" 
                >
                    <button
                        onClick={(e) => {
                            const title = titleRef.current.value                     
                            const details = detailsRef.current.value
                            const id = task.id
                            dispatch(edit({id, title, details}));
                            setOnEdit(false);
                        }}   
                    >Save</button>
                    <button
                        onClick={(e) => setOnEdit(false)}
                    >Discard</button>
                </div>
            </div>
        )
    }

    if(onEdit){
        return <div>{Form(props.task)}</div>
    }
    return <div>{Box(props.task)}</div>

}