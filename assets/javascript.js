//state variables
// I need a way to save to local storage when the save button is clicked.
// I need to figure out a way indicate if the timeblock is in the past present or future.

var userInput = $('.description')
var saveButton = $('.saveBtn')

saveButton.click(function () {
    event.preventDefault();
    console.log('Hello');
    var userMessage = {
        userInput: userInput.value,
    };

    localStorage.setItem('userMessage', JSON.stringify(userMessage));
    showMessage();
});


function showMessage() {

    var oldUserMessage = JSON.parse(localStorage.getItem('userMessage'));
    if (oldUserMessage !== null) {

    }
}


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do, YYYY"));
