// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // var highScores = JSON.parse(localStorage.getItem("scores")) || [];

  
  // function task(){
  //   var timeblock = $('#time-block');
  //   var saved = localStorage.setItem("saved", text)
  //   console.log(saved);
  // }
  // task();
  
  $('.saveBtn').on("click",function(){

     // get nearby values of the description in jQuery
    var text = $(this).siblings('.description').val();
    // get the id attribute of the parent div element
    var timeKey = $(this).parent().attr('id');
    localStorage.setItem(timeKey, text);

  });
    

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


var currentTime;

function setTime (){
  setInterval(function()  {
    var time = $("#currentDay");
    currentTime = dayjs().format('[Date: ] dddd, MMM D, YYYY [ - Time: ]HH:mm:ss a');
    time.text(currentTime);
  }, 1000);
}
setTime();




  var milTime = dayjs().format('HH')
  console.log(milTime.toString());

  $('.time-block').each(function(){

    var timeSlot = parseInt($(this).attr('id').split("hours-")[1]);
    if (timeSlot < milTime ) {
      
      $(this).addClass('past')
    }
    else if(milTime == timeSlot){

      $(this).addClass('present')
    }
    else{
      $(this).addClass('future')
    }



  })



colorTime();

// if (condition) {
  
// }
var plannerTime = [
  {

  }
]

