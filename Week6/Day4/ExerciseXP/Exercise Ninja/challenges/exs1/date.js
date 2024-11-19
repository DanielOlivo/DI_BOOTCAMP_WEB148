function getTimeDifference(){
    const today = new Date();
    const nextYear = today.getFullYear() + 1;
    const end = new Date('01/01/' + nextYear);
    const hours = (end.getTime() - today.getTime()) / (1000 * 3600);

    const days = Math.floor(hours / 24);
    const remHours = Math.floor(hours - days * 24);

    return {
        days: days,
        hours: remHours
    };
}

module.exports = getTimeDifference;
