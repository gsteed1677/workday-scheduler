
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
    localStorage.setItem(text, time)
});


//.each - kind of like a for loop - select a time box and loop over all of them to get that id and convert it into an interager - use the moment.hours and set it to the var to be the current time








//class from above body to change color depending on the time of day - add a conditional

});