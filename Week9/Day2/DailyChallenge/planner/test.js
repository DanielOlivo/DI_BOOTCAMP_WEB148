// const {first, last} = getFirstAndLast(2024, 11)
// console.log('first', first)
// console.log('last', last)


console.log(getFirstAndLast(2025, 1));

const {last} = getFirstAndLast(2024, 11);



function extract(date){
    return {
        year:   date.getFullYear(),
        month:  date.getMonth(),
        dt:     date.getDate(),
        day:    date.getDay()
    }
}

function getFirstAndLast(year, month){
    const first = new Date(year, month, 1, 0, 0, 0, 0);

    let last = new Date(year, month, 26, 0, 0, 0);
    while(last.getMonth() === first.getMonth()){
        last.setDate(last.getDate() + 1)
        console.log('day', last.getDate())
    }
    last.setDate(last.getDate() - 1)

    return {
        first: extract(first),
        last: extract(last)
    }
}