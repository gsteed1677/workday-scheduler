
//document.ready to make sure all the page loads
$( document ).ready(function() {
    console.log( "ready!" );

//get date to work first - nav/header
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
document.getElementById("currentDay").innerHTML = date;

//body - make structure in HTML - Column rows
//each row would hav an ID - time slot - times should each have own id
//DIV id, Text area, button, class for styling

//information needs to be brought into local storage


//onClick event listener to the buttons
$(".clickEvent").on("click", function(){
    var text = $(this).siblings(".textArea").val()
    console.log(text)
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, text)
    console.log(time)
});


//.each - kind of like a for loop - select a time box and loop over all of them to get that id and convert it into an interager - use the moment.hours and set it to the var to be the current time
$("#9am textarea").val(localStorage.getItem("9am"))
$("#10am textarea").val(localStorage.getItem("10am"))
$("#11am textarea").val(localStorage.getItem("11am"))
$("#12pm textarea").val(localStorage.getItem("12pm"))
$("#1pm textarea").val(localStorage.getItem("1pm"))
$("#2pm textarea").val(localStorage.getItem("2pm"))
$("#3pm textarea").val(localStorage.getItem("3pm"))
$("#4pm textarea").val(localStorage.getItem("4pm"))
$("#5pm textarea").val(localStorage.getItem("5pm"))
//same for the other 8 - using different time slots


for (i = 9; i < 18; i++) {
var i = ".localTime"
if ($(i).attr("data-hour")===moment().format("H")) {
    $(i).attr("class", "present");
} else if ($(i).attr("data-hour") < moment().format("H")) {
    $(i).attr("class", "future");
} else {
    $(i).attr("class", "past");
}
}
// for loop for i = 9 and then sub in i for where ever 9 is -- for above function

//if this "hour // example 9am" = the hour we can return from moment (return the number of that hour 3pm == 15) - just get the hour



//class from above body to change color depending on the time of day - add a conditional

});