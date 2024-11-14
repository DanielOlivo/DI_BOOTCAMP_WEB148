// exercise 1: dog age to human age
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
data.reduce((acc, info) => acc + info.age * 7, 0);


// exercise 2: email
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
userEmail3.trim()


// exercise 3: employee #3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

users.map((info) => {
    const result = {}
    result[info.firstName + ' ' + info.lastName] = info.role;
    return result;
});


// exercise 4: array to object
const letters = ['x', 'y', 'z', 'z'];
{
    let result = {};
    for(c of letters){
        if(c in result){
            result[c] += 1;
        }
        else {
            result[c] = 1;
        }
    }
    result;
}

letters.reduce((acc, c) => {
        if(c in acc){
            acc[c] += 1;
        }
        else {
            acc[c] = 1;
        }
        return acc;
    }
    ,{});