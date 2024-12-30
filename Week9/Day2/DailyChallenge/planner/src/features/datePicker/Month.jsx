import { useSelector, useDispatch } from "react-redux";
import { selectDay, edit } from "../tasks/taskSlice";

export default function Month(props){

    const dispatch = useDispatch()
    const {first, last, today} = useSelector(state => state.month)
    const tasks = useSelector(state => state.tasks.all);

    let weeksAmount = 0
    let idx = first.date - first.day;
    let start = 1 - first.day;
    while(idx < last.date){
        idx += 7;
        weeksAmount++;
    }

    const weeks = Array.from({length: weeksAmount}, (_, i) => 
        Array.from({length: 7}, (_, d) => start + i * 7 + d)
    )

    const TodayHeader = (day) => (
        <div
            className='rounded-full text-white bg-blue-700'
        >{day}</div>
    )

    const UsualHeader = (day) => (
        <div>{day}</div>
    )

    const Day = (day, isToday) => {
        if(isToday){
            return TodayHeader(day);
        }
        return UsualHeader(day);
    }

    const Cell = (date) => {
        if(date < 1 || date > last.date){
            return <div
                className="w-20 h-32" 
            ></div>
        }
        const isToday = first.year == today.year && first.month == today.month && date == today.date;
        return (
            <div
                className="w-20 h-32 border-2 border-gray-200 hover:bg-gray-200 flex flex-col items-start" 
                onDrop={(e) => {
                    e.preventDefault();
                    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
                    console.log('data', data)
                    data.date = {year: first.year, month: first.month, date}
                    console.log('onDrop', 'new date', first.year, first.month, date)
                    dispatch(edit(data))
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                }}

                onClick={(e) => {
                    e.preventDefault();
                    const payload = {year: first.year, month: first.month, date}
                    console.log('click', payload)
                    dispatch(selectDay(payload))
                }}
            >
                {isToday ? TodayHeader(date) : UsualHeader(date)}
                {tasks.filter(task => 
                    task.date.year == first.year && task.date.month == first.month && task.date.date == date).slice(0, 3).map(task => 
                        <p
                            className='rounded bg-blue-700 text-white' 
                        >
                            {task.title}
                        </p>)}
            </div>
        )
    }


    return (
        <div
            className='flex flex-col items-center justify-start border-2 border-black w-3/5' 
        >
            {weeks.map(days => (
                <div
                    className='flex flex-row justify-between' 
                >
                    {days.map(day => Cell(day))}
                </div>
            ))}
        </div>
    )
}
