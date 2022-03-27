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