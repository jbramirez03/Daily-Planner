var currentDay = $("#currentDay");




function displayDay () {
    currentDay.text(moment().format("dddd, MMM Do"));
}

displayDay();

   function checkTime () {
       hourToday = moment().hour();

       $(".time-block").each(function () {

       });
   }