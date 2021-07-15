var currentDay = $("#currentDay");

var allTextareas = $(".text-box");


function displayDay () {
    currentDay.text(moment().format("dddd, MMM Do"));
}

displayDay();

   function checkTime () {
       hourToday = moment().hour();
    // hourToday = 12;

       $(".time-block").each(function () {
        individualHour = parseInt($(this).attr("id").split("hour")[1]);


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

   $(".saveBtn").on("click", function () {
       $(this).siblings("textarea").addClass("highlighter");
       $(this).siblings("p").addClass("hour-block-animation");
       var textBox = $(this).siblings(".text-box").val();
       var hour = $(this).parent().attr("id");

       localStorage.setItem(hour, textBox);
       setTimeout(()=> {$(this).siblings("textarea").removeClass("highlighter");}, 3000);
       setTimeout(()=> {$(this).siblings("p").removeClass("hour-block-animation");}, 3000)
   })

   $("#hour9 .text-box").val(localStorage.getItem("hour9"));
   $("#hour10 .text-box").val(localStorage.getItem("hour10"));
   $("#hour11 .text-box").val(localStorage.getItem("hour11"));
   $("#hour12 .text-box").val(localStorage.getItem("hour12"));
   $("#hour13 .text-box").val(localStorage.getItem("hour13"));
   $("#hour14 .text-box").val(localStorage.getItem("hour14"));
   $("#hour15 .text-box").val(localStorage.getItem("hour15"));
   $("#hour16 .text-box").val(localStorage.getItem("hour16"));
   $("#hour17 .text-box").val(localStorage.getItem("hour17"));

   