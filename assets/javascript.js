var saveButton = $('.saveBtn')
var currentHour = moment().format('ha')
// var allTextBox = $('description');


//this allows me to dynamically target the buttons that are on the html.
//this is also storing that information into the local storage.
saveButton.click(function (event) {
    event.preventDefault();
    var userInput = document.getElementById(event.target.id.replace("btn", "input"))
    console.log(event);

    localStorage.setItem(userInput.id, userInput.value);
});

//this is the function that will display the saved message to the page.
function showMessage() {
    //the var keys is where i take the object from keys in the local storage.
    // var keys = Object.keys(localStorage)
    // var i = keys.length;
    // for (var j = 0; j < i; j++) {
    //     document.getElementById(keys[j]).value = localStorage.getItem(keys[j])
    // }
    var timesheet = $('#timesheet')[0]
    for ( var i = 0; i < timesheet.children.length; i++) {
        
        
        var timeInputId = timesheet.children[i].id + '_input';
        var timeInput = document.getElementById(timeInputId);
        var userInput = localStorage.getItem(timeInputId)

        timeInput.value = userInput
        console.log(new Date(timesheet.children[i].id) < currentHour)
        if (moment(timesheet.children[i].id).isAfter(currentHour)) {
            timeInput.classList.add('future');
        }
        else if(moment(currentHour).isAfter(timesheet.children[i].id)) {
            timeInput.classList.add('past');
        }

    }
    
}
showMessage()
console.log(currentHour)



//now i need a way to compare each row to the curret time "moment()" and apply the css attributes accordingly.
// var userInput = document.getElementById(event.target.id.replace("input"))

    // for (var i = 0; i < allTextBox.length; i++) {
    //     var divHour = parseInt($(allTextBox[i]).attr('data-value'));

    // }


// var divHour = parseInt($('description'))
//     if (userInput < currentHour) {
//     $('description').addClass('past');
//     }  



//this is the current date that is displayed at the top of the page.
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM, Do, YYYY"));
