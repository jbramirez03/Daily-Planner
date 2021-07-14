var currentDay = $("#currentDay");




function displayDay () {
    currentDay.text(moment().format("dddd, MMM Do"));
}

displayDay();

   function checkTime () {
       hourToday = moment().hour();
    // hourToday = 12;

       $(".time-block").each(function () {
        individualHour = parseInt($(this).attr("id").split("hour")[1]);

        console.log(hourToday, individualHour);

        if(hourToday > individualHour) {
            $(this).children("textarea").addClass("past");
            $(this).children("textarea").removeClass("present");
            $(this).children("textarea").removeClass("future");
        } else if (individualHour > hourToday) {
            $(this).children("textarea").addClass("future");
            $(this).children("textarea").removeClass("past");
            $(this).children("textarea").removeClass("present");
        } else {
            $(this).children("textarea").removeClass("future");
            $(this).children("textarea").removeClass("past");
            $(this).children("textarea").addClass("present");
        }

       })
    //    checkTime();
   }

   checkTime();

   $(".savenBtn").on("click", function () {
       var textBox = $(this).siblings(".text-box").val();
       var hour = $(this).parent().attr("id");

       localStorage.setItem(hour, textBox);
   })

   