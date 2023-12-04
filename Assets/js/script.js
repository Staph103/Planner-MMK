// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/*Calls the key and value from local storage and sets it equal to the value on the html page */
$('#hours-9 .description').val(localStorage.getItem('hours-9'));
$('#hours-10 .description').val(localStorage.getItem('hours-10'));
$('#hours-11 .description').val(localStorage.getItem('hours-11'));
$('#hours-12 .description').val(localStorage.getItem('hours-12'));
$('#hours-13 .description').val(localStorage.getItem('hours-13'));
$('#hours-14 .description').val(localStorage.getItem('hours-14'));
$('#hours-15 .description').val(localStorage.getItem('hours-15'));
$('#hours-16 .description').val(localStorage.getItem('hours-16'));
$('#hours-17 .description').val(localStorage.getItem('hours-17'));

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//




// TODO: Add code to display the current date in the header of the page.
//sets the current time in desired format and adds it to an id 
function setTime() {
  setInterval(function () {
    var time = $("#currentDay");
    currentTime = dayjs().format('[Date: ] dddd, MMM D, YYYY [ - Time: ] hh:mm:ss a');
    time.text(currentTime);
  }, 1000);
}


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$('.saveBtn').on("click", function () {

  // get nearby values of the description in jQuery
  var text = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');
  localStorage.setItem(timeKey, text);
  //tells user a new appointment was added and displays the appointment text as long as theres a value in local storage
  if (text) {
    var newAppointment = document.createElement('p');
    newAppointment.textContent = "New appointent added " + text + " ✅";
    var app = document.querySelector('.appointment')
    app.append(newAppointment);
  }

});


//sets the military time hours to a variable to be used for if statements in line 73
var milTime = dayjs().format('HH');
//For each id with class time block removes the "hours-"
$('.time-block').each(function () {

  var timeSlot = parseInt($(this).attr('id').split("hours-")[1]);
  //argument for past present and future classes comparing the newly split id to the military time variable
  if (timeSlot < milTime) {

    $(this).addClass('past')
  }
  else if (milTime == timeSlot) {

    $(this).addClass('present')
  }
  else {
    $(this).addClass('future')
  }

})

//calls function 
setTime();
