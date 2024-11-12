function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(successCallback);
    }
    else {
        console.log('nope');
    }
}

function successCallback(position){
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    console.log(`longitude: ${longitude}; latitude: ${latitude}`);
}