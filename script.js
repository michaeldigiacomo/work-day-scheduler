$(document).ready(function() {

// check for button clicks inside an on click
$(".saveBtn").on("click", function() {
// grab my values for time and text
var value = $(this).siblings(".task").val();
var time = $(this).parent().attr("id")
// save them to local storage
localStorage.setItem;{time, value}
})

// write a function to update the hours in the time blocks
function
// get current time using moment

// loop over our time blocks hint: look up .each)

// check to see if we have moved past the current time
// if
// addClass
// addClass("past")

// check to see if it is the current time
// else if
// removeClass
// addClass

// check to see if time is future
// else
// remove Class
// remove Class
// add class


// load any saved data from local storage

$("#hour-9 .task").val(localStorage.getItem("hour-9"));

// display curent day on page (usae moment)



})