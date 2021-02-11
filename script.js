$(document).ready(function() {

// check for button clicks inside an on click
$(".saveBtn").on("click", function() {
// grab my values for time and text
var value = $(this).siblings(".textInput").val();
var time = $(this).siblings(".textInput").attr("id")
// save them to local storage
localStorage.setItem(time, value);
})

// write a function to update the hours in the time blocks
var today = moment()
// get current time using moment
var currentTime = moment().hours();
console.log(currentTime);
// loop over our time blocks hint: look up .each)

$(".textInput").each(function(){
    var calenderTime = parseInt($(this).attr("id"));
    if (calenderTime < currentTime) {
        $(this).addClass("past");
    } else if (calenderTime > currentTime) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
})

// load any saved data from local storage

    for (var i = 9; i < 18; i ++) {
        $("#" + i).val(localStorage.getItem(i));
    }

// display curent day on page (usae moment)

})