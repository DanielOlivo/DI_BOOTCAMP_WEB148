function extract(d){
    return {
        year: d.getFullYear(),
        month: d.getMonth(),
        date: d.getDate(),
        day: d.getDay()
    }
}

function now(){
    return extract(new Date())
}

function getFirstAndLast(year, month){
    const first = new Date(year, month, 1, 0, 0, 0, 0);

    let last = new Date(year, month, 26, 0, 0, 0);
    while(last.getMonth() === first.getMonth()){
        last.setDate(last.getDate() + 1)
    }
    last.setDate(last.getDate() - 1)

    return {
        first: extract(first),
        last: extract(last)
    }
}

export { extract, now, getFirstAndLast };