// exercise 1: giphy API #2
// it is daily challenge #1, no?


// exercise 2: analyse

// returns promise which resolves itself in two seconds with value 'slow'
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

// returns promise which resolves itself in on esecond with value 'fast'
let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// resolves slow and fast in sequential order
let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

// sequentialStart()


// exercise 3: analyse

let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// performs in parallel
let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

// setTimeout(concurrentStart, 4000)


// exercise 4: modify fetch with async/await
const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
      ];

// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//       fetch(url).then(resp => resp.json())
//   ));
//   console.log('users', users);
//   console.log('posta', posts);
//   console.log('albums', albums);
// }

// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Add a try catch block in order to catch any errors. To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.


async function getData(){
    try{
        const fns = urls.map(url => async function() {
            const response = await fetch(url);
            console.log('response: ' + response);
            const json = await response.json();
            return json;
        });
        const [users, posts, albums] = await Promise.all(fns.map(fn => fn()));
        console.log('users', users);
        console.log('posta', posts);
        console.log('albums', albums);
    }
    catch(err){
        console.log(err);
        console.log('ooooops');
    }
}

// getData()