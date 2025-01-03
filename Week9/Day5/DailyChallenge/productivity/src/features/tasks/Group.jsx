import { useEffect, useRef, useState } from 'react'
import Item from './Item'

export default function Group(props){

    const {date, tasks, isWhen} = props.group

    const divRef = useRef() 
    const [data, setData] = useState({})
    const [headerPos, setHeaderPos] = useState(0);

    

    useEffect(() => {
            const offsetHeight = divRef.current.offsetHeight;
            const offsetTop = divRef.current.offsetTop - props.top;
            const rect = divRef.current.getBoundingClientRect()
            const top = rect.top
            const bottom = rect.bottom

            setData({
                ...data, 
                offsetHeight,
                offsetTop,
                top: top - props.top,
                bottom: bottom - props.top
            })

            if(data.top > 0) setHeaderPos(0);
            else if(data.bottom < 40) setHeaderPos(data.offsetHeight - 40);
            else setHeaderPos(-data.top);

    }, [divRef.current, props.scrollTop, props.top])

    const background = (function(){
            switch(isWhen){
            case 'today': return 'bg-blue-700';
            case 'ahead': return 'bg-green-700';
            case 'behind': return 'bg-green-200';
        }
    })()

    return (
        <div ref={divRef}
            // className='border-2 border-gray-500'
            className='mt-8'
        >
            <div
                className="mt-4 mb-4 text-3xl w-full " 
            >
                <h1
                    style={{top: headerPos + 'px', height: '40px'}}
                    className={'relative text-white ' + background}
                >{date}</h1>
            </div>


            {tasks.map(task => <Item task={task} />)}
            {/* <p
                className='text-xs' 
            >{JSON.stringify(data)}</p>  */}
        </div>
    )
}