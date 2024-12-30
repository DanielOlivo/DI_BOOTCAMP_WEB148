import { useRef, useState } from "react"
import {edit, remove} from './taskSlice'
import { useDispatch } from "react-redux"


export default function Task(props){

    const titleRef = useRef()
    const detailsRef = useRef()
    const dispatch = useDispatch()

    const [onEdit, setOnEdit] = useState(false);

    const handleEdit = (e) => {
        e.preventDefault()
        const title = titleRef.current.value;
        const details = detailsRef.current.value;
        const data = {...props.task, title, details}
        // dispatch(edit(data));
    }

    return (
        <div
            className='border-2  rounded flex flex-col max-w-full' 
            onDoubleClick={(e) => setOnEdit(true)}
            draggable={!onEdit}
            onDragStart={(e) => {
                e.dataTransfer.setData('text/plain', JSON.stringify(props.task))
            }}
            onDrop={(e) => {
                e.preventDefault();
            }}
        >

            <div
                className="flex flex-row justify-between items-start " 
            >
                <input 
                    ref={titleRef} 
                    defaultValue={props.task.title} 
                    placeholder="Title"
                    className='text-3xl w-4/5'
                    readOnly={!onEdit}
                    onBlur={(e) => {
                        dispatch(edit({...props.task, title: e.target.value}))
                        setOnEdit(false)
                    }}
                    onChange={handleEdit}
                />

                <button
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('remove', props.task.id)
                        dispatch(remove(props.task.id))
                    }} 
                >X</button>
            </div>

            <input 
                ref={detailsRef} 
                defaultValue={props.task.details} 
                placeholder="Details"
                readOnly={!onEdit}
                onBlur={(e) => {
                    // console.log('blur...')
                    dispatch(edit({...props.task, details: e.target.value}))
                    setOnEdit(false)
                }}
                onChange={handleEdit}
            />

        </div>
    )

}