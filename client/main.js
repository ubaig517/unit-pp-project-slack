<<<<<<< HEAD
// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement('div');
title.innerHTML = 'Social Calendar';
document.body.appendChild(title);

// Your schedule can be accessed through the global object "schedule"
console.log(schedule);
=======
// jquery is available in this file if you bower installed properly

function Calendar(schedule) {
  // do something with the data here;
}
function Event(data) {
  this.startTime = data.startTime;
  this.endTime = data.endTime;
  this.description = data.description;
}
function Day(name) {
  this.name = name;
  this.events = [];
  this.addEvent = function(eventData) {
    this.events.push(new Event(eventData));
  };
  this.orderEvents = function() {
    //go through events and sort them by start and end time
  };
}
function Week(number) {
  this.number = number;
  this.days = [];
  this.addDay = function(name) {
    var day = new Day(name);
    this.days.push(day);
  };
}


$(document).on('ready', function() {
  var title = $('<h1>').text('Social Calendar');
  $('body').append(title);
  console.log(title);
  $.get('http://slack-server.elasticbeanstalk.com/calendar/3').success(function(data) {
    console.log(data);
  });
});
>>>>>>> 8745f725863dac8b74c607cdeab638bc9e0176b7
