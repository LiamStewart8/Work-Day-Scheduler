var saveButton = $('.saveBtn')
var currentHour = moment()

//this allows me to dynamically target the buttons that are on the html.
//this is also storing that information into the local storage.
saveButton.click(function (event) {
    event.preventDefault();
    var userInput = document.getElementById(event.target.id.replace("btn", "input"))
    localStorage.setItem(userInput.id, userInput.value);
});

//this is the function that will display the saved message to the page. This also will change the color of the input boxes depending on the hour of the day.
function showMessage() {
    var timesheet = $('#timesheet')[0]
    //this is grabbing the child elements of the parent elements
    for (var i = 0; i < timesheet.children.length; i++) {
        var timeInputId = timesheet.children[i].id + '_input';
        var timeInput = document.getElementById(timeInputId);
        var userInput = localStorage.getItem(timeInputId)

        timeInput.value = userInput

        timesheetTime = moment(timesheet.children[i].id, 'ha')

        if (moment(currentHour).isBefore(timesheetTime)) {
            timeInput.classList.add('future');
        }
        else if (moment(currentHour).isAfter(timesheetTime)) {
            timeInput.classList.add('past');
        }
        else {
            timeInput.classList.add('present');
        }
    }

}

showMessage()

//this is the current date that is displayed at the top of the page.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do, YYYY"));
