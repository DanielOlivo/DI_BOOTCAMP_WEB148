import { createSlice } from "@reduxjs/toolkit";
import {extract, now, getFirstAndLast} from '../../utils/dateExtract'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
];

function getInit(){
    const today = now();
    const {first, last} = getFirstAndLast(today.year, today.month)

    return {first, last, today, selected: undefined};
}

const pickerSlice = createSlice({
    name: 'month',
    initialState: getInit(),
    reducers: {
        setNextMonth: (state) => {
            console.log('setNext')
            const currentMonth = state.last.month;
            const year = currentMonth == 11 ? state.last.year + 1 : state.last.year;
            const month = currentMonth == 11 ? 0 : currentMonth + 1;
            const {first, last} = getFirstAndLast(year, month);

            state.first = first;
            state.last = last;
            state.today = extract(new Date())
        },
        setPrevMonth: (state) => {
            console.log('setPrev')
            const currentMonth = state.first.month;
            const year = currentMonth == 0 ? state.first.year - 1 : state.first.year;
            const month = currentMonth == 0 ? 11 : currentMonth - 1;
            const {first, last} = getFirstAndLast(year, month);

            state.first = first;
            state.last = last;
            state.today = extract(new Date())
        },
    }
})

export const {setNextMonth, setPrevMonth} = pickerSlice.actions
export default pickerSlice.reducer;

