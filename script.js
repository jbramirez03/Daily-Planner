var currentDay = $("#currentDay");




function displayDay () {
    currentDay.text(moment().format("dddd, MMM Do"));
}

displayDay();

   function checkTime () {
       hourToday = moment().hour();

       $(".time-block").each(function () {
        individualHour = parseInt($(this).attr("id").split("hour")[1]);

        console.log(hourToday, individualHour);

        if(hourToday > individualHour) {
            $(this).children("textarea").addClass("past");
            $(this).children("textarea").removeClass("present");
            $(this).children("textarea").removeClass("future");


        }

       })
   }

   checkTime();

