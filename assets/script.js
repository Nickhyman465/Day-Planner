var timeBlockEl = document.querySelector(".container");
var clockEl = document.querySelector("#currentDay");
var userTasksEl = document.querySelector("#userTasks");
var userButtonCheck = document.querySelector("#buttonCheck");
var workHoursEl = document.querySelector("#workHours");
var saveButtonEl = document.querySelector("#saveT");

var userTasksLocal = localStorage.getItem("inputSave");


var workHours = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"];
var currentDate =  moment();
var date = document.createElement("text");
console.log(currentDate.format("MMM Do, YYYY"));

//Add in current date
date.innerHTML = currentDate;
clockEl.appendChild(date)


//function to create timeblocks for user input
var createTimeblocks = function () {
    var workDayHours = 9;
    var workHCount = 0;


    for (var i = 0; i < workDayHours; i++) {
    //creates hours 
    var hours = document.createElement("div");
    var hoursContent = document.createTextNode(workHours[workHCount++])
    hours.appendChild(hoursContent);
    workHoursEl.appendChild(hours);
    
    //creates input blocks and give each box a unique id
    var timeBlock = document.createElement("input");
    timeBlock.setAttribute("type", "text");
    timeBlock.setAttribute("id", "box" + i);
    timeBlock.setAttribute("style", "display:block; border-radius: 150px; width: 100%; margin-bottom: 20px;");
    timeBlockEl.appendChild(timeBlock);
    
    
 }
}
//implement save and reset button functions


createTimeblocks();