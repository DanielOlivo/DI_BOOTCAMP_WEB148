import { useSelector } from "react-redux";
import { selectAllTasks, selectAllTasksSorted, selectGroupedTasks } from "./taskSlice";
import Item from './Item'
import Group from "./Group";
import { useEffect, useRef, useState } from "react";

export default function List(){
    const allTasks = useSelector(selectAllTasksSorted)
    const groups = useSelector(selectGroupedTasks)

    const divRef = useRef()
    const [data, setData] = useState(0)



    return (
        <>
            {/* <label>{JSON.stringify(data)}</label> */}
            <div
                className='w-4/5 h-4/5 
                overflow-y-scroll scroll-smooth'
                // border-2 border-gray-200' 
                ref={divRef}
                onScroll={(e) => {
                    const {scrollTop, scrollHeight, clientHeight} = e.target;
                    const top = e.currentTarget.getBoundingClientRect().top;
                    setData({scrollHeight, scrollTop, clientHeight, top})
                }}
            >
                <div
                    className="w-full" 
                >
                    {groups.map(group => <Group group={group} scrollTop={data.scrollTop} top={data.top}/>)}
                </div>
                {/* {allTasks.map(task => <Item task={task}/>)} */}
            </div>
        </>
    )
}