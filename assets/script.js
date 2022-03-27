//To Do:use moment to get todays date
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(time);
// Grab the element with the #currentDay and chage its innerText to todays date

//grab the button from HTML
var buttonNine = document.getElementById("button9")
//add event listener to button
buttonNine.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour9'
    localStorage.setItem("hour9", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonTen = document.getElementById("button10")
//add event listener to button
buttonTen.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour10'
    localStorage.setItem("hour10", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonEleven = document.getElementById("button11")
//add event listener to button
buttonEleven.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour11'
    localStorage.setItem("hour11", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonTwel = document.getElementById("button12")
//add event listener to button
buttonTwel.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour12'
    localStorage.setItem("hour12", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonThir = document.getElementById("button13")
//add event listener to button
buttonThir.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour13'
    localStorage.setItem("hour13", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonFourt = document.getElementById("button14")
//add event listener to button
buttonFourt.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour14'
    localStorage.setItem("hour14", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonFift = document.getElementById("button15")
//add event listener to button
buttonFift.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour15'
    localStorage.setItem("hour15", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonSixt = document.getElementById("button16")
//add event listener to button
buttonSixt.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour16'
    localStorage.setItem("hour16", event.target.previousSibling.previousSibling.value)
});

//grab the button from HTML
var buttonSevTee = document.getElementById("button17")
//add event listener to button
buttonSevTee.addEventListener("click", function(event){
    //prevents button from reloading
    event.preventDefault();
    //access the textareas value using the buttons relationship to the text area
    //event object contains button
    //button has a previousSibling the textarea
    //and we grab the text areas value
    console.log(event.target.previousSibling.previousSibling.value)
    //set the value to local storage with a name of 'hour17'
    localStorage.setItem("hour17", event.target.previousSibling.previousSibling.value)
});



