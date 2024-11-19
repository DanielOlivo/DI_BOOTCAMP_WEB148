const axios = require('axios');

async function getNextHoliday(){
    const today = new Date();
    const [year, month, day] = [today.getFullYear(), String(today.getMonth()).padStart(2,'0'), String(today.getDay()).padStart(2,'0')];
    // console.log(year);
    // console.log(month);
    // console.log(day);
    let url = `https://www.hebcal.com/hebcal?v=1&cfg=json&start=${year}-${month}-${day}&end=${year+1}-${month}-${day}&maj=on`

    const response = await axios.get(url);
    const holiday = response.data.items[0].title;
    const date = new Date(response.data.items[0].date);

    var seconds = Math.floor((today - date) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);

    const result = {
        holiday: holiday,
        days: days,
        hours: hours,
        minutes: minutes 
    };

    // console.log(result);

    return result;
}
// getNextHoliday();

module.exports = getNextHoliday;