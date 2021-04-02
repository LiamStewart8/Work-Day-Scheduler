//state variables
// I need a way to save to local storage when the save button is clicked. I also need a way to specify which button is being clicked to save it accordingly.
// I need to figure out a way indicate if the timeblock is in the past present or future.

var saveButton = $('.saveBtn')
var currentHour = moment().format('Ha')





//this allows me to dynamically target the buttons that are on the html.
//this is also storing that information into the local storage.
saveButton.click(function (event) {
    event.preventDefault();
    var userInput = document.getElementById(event.target.id.replace("btn", "input"))
    console.log(event);

    localStorage.setItem(userInput.id, userInput.value);
});


function showMessage() {

    var keys = Object.keys(localStorage)
    var i = keys.length;
    for (var j = 0; j < i; j++){
        document.getElementById(keys[j]).value = localStorage.getItem(keys[j])
    }

}
showMessage()

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do, YYYY"));
