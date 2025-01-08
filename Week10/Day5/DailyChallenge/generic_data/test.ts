async function fetchAPI(){
    const url = "http://www.themealdb.com/api/json/v1/1/search.php?s=pasta"
    const options = {
        method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    }
    const response = await fetch(url, options)
    console.log(response)
    console.log(response.body)
    console.log('gonna to make json')
    const data = await response.json()
    console.log('data', data)
}


// fetchAPI()

interface isBoolean<T>{
    arg: T,
    is: boolean
}

const isObj = <T>(arg: T): isBoolean<T> => {
    if(typeof arg === 'object' && !Array.isArray(arg) && arg !== null){
        return {arg, is: true}
    }
    return {arg, is: false}
}
