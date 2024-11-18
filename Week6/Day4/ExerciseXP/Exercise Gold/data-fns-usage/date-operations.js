const dateFns = require('date-fns');


function currentTime(){
    const date = new Date();
    console.log('date: ' + date.getDate())
    console.log('time ' + date.getHours() + ':' + date.getMinutes());
    console.log(dateFns.format(date, 'yyyy/mm/dd'))
}

module.exports = currentTime;