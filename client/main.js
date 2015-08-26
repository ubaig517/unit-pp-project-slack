// jquery is available in this file if you bower installed properly

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
  $.get('http://slack-server.elasticbeanstalk.com/calendar/1').success(function(data) {
    console.log(data);
  });
});
