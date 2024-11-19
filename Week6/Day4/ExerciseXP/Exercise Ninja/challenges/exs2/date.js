const inquirer = require('inquirer');

function getMinutes(){
    return inquirer.createPromptModule()([
        {
            name: 'date',
            message: "When is your birthday? <dd/mm>"
        }
    ])
    .then(answer => {

        const today = new Date();

        const [day, month] = answer.date.match(/(\d+)/g)
        let birthDate = new Date(today.getFullYear(), month, day);

        if(today > birthDate){
            birthDate = new Date(today.getFullYear() + 1, month, day);
        }

        const diff = Math.floor((birthDate.getTime() - today.getTime()) / (1000 * 60));

        return diff;
    })
}

module.exports = getMinutes;
