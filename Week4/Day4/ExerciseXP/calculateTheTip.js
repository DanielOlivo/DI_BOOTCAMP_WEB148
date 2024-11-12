// Create a function called calculateTip() that takes no parameter.
function calculateTip(){

    // Create a variable called billAmount that fetches the value of the input, 
    // which id is billAmt (check the HTML file) –> It’s the amount of the bill.
    const billAmount = document.getElementById('billamt').value;

    // Create a variable called serviceQuality that fetches the value of 
    // the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.
    const serviceQuality = document.getElementById('serviceQual').value;

    // Create a variable called numberOfPeople that fetches the value of 
    // the input, which id is numOfPeople (check the HTML file) –> 
    // It’s the number of people sitting at the table.
    let numberOfPeople = document.getElementById('peopleamt').value;

    // Create a condition :
    // If serviceQuality is equal to zero, or billAmount is empty, 
    // alert the user to enter these values.
    if(!billAmount.trim().match(/^\d+$/i)){
        alert("fill out bill amount field");
    }
    if(serviceQuality.value == "0"){
        alert('select service quality');
    }


    // Create another condition after the first one :
    // If the input numberOfPeople is empty or is smaller 
    // than 1, set a default value of 1 to numberOfPeople and 
    // make sure that the tag which id is each, is not displayed 
    // (check the end of the HTML file).
    if(!numberOfPeople.trim().match(/^\d+$/i) || numberOfPeople < 1){
        numberOfPeople = 1;
    }
        

    // Create a variable named total: the value should be 
    // ( billAmount * serviceQuality ) / numberOfPeople 
    // (the outcome is the average tip each person should pay)
    let total = (parseFloat(billAmount) * parseFloat(serviceQuality)) / parseFloat(numberOfPeople); 
    // console.log(total);

    // Use the toFixed method to round total to two decimal points.
    total = total.toFixed();

    // Add the CSS property “display:block” to the tag which id is totalTip.
    document.getElementById('totalTip').style.display = 'block';

    // Display the variable total in the tag which id is tip.
    document.getElementById('tip').innerText = total;

};

// To avoid displaying the total if the function calculateTip() is not called, 
// add the CSS property “display:none” to the tag which id is totalTip.
document.getElementById('totalTip').style.display = 'none';


// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.
document.getElementById('calculate').onclick = calculateTip





