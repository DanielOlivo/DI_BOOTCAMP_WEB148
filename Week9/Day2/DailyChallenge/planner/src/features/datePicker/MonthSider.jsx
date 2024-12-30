import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNextMonth, setPrevMonth } from "./pickerSlice";

export default function MonthSider(props){

    const [timerId, setTimerId] = useState(0)
    const dispatch = useDispatch()

    return (
        <div
            className="w-24 min-h-full"
            onDragEnter={(e) => {
                e.preventDefault();
                console.log('sider: enter') 
                setTimerId(setTimeout(() => {
                    setTimerId(setInterval(() => {
                        console.log('move!')
                        if(props.dir == 'next'){
                            dispatch(setNextMonth())
                        }
                        else if(props.dir == 'prev'){
                            dispatch(setPrevMonth())
                        }
                    }, 2000))
                }, 2000))
            }} 
            onDragLeave={(e) => {
                console.log('sider: leave')
                clearTimeout(timerId)
                clearInterval(timerId)
            }}
        >
            {props.dir}
        </div>
    )
}