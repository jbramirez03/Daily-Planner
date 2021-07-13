var currentDay = $("#currentDay");

var am9 = $(".row-9am");



function displayDay () {
    currentDay.text(moment().format("dddd, MMM Do"));
}

displayDay();


function firstRow () {
    var today = moment();
    // console.log(today.format("hh A"));
    ourTime = moment("9 am", "hh A");
    console.log(ourTime);
    if (today.isAfter(ourTime)) {
        am9.children("textarea").addClass("past");
    } else if (today === ourTime) {
        am9.children("textarea").addClass("present");
    }
    
    
}
 firstRow();


 function savingItems (row) {
    if (row.children("textarea").val() === "") {
        alert("Planner must have event in order to be saved");
        return;
    }

    var savedEvent = localStorage.getItem("events");
    var eventsArr;

    if (savedEvent === null) {
        eventsArr = [];
    } else {
        eventsArr = JSON.parse(savedEvent);
    }

    eventsArr.push(savedEvent);

    eventsArrString = JSON.stringify(eventsArr);
    localStorage.setItem("events", eventsArrString);
 }

 function gettingItems (row) {
     savedEvent = localStorage.getItem("events");

     if (savedEvent === null) {
         return;
     }


     var storedEvents = JSON.parse(savedEvent);

     var textBox = row.children("textarea").text()
 }
 