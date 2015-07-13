if (window.mochaPhantomJS) {
  Function.prototype.bind = Function.prototype.bind || function (thisp) {
      var fn = this;
      return function () {
          return fn.apply(thisp, arguments);
      };
  };
}

function doStuff(done, data, events, days) {
    $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/calendar/v3/calendars/0uj8ecocvpma1uqq5gs9lfut0s%40group.calendar.google.com/events?timeMin=2015-06-01T00%3A00%3A00Z&alwaysIncludeEmail=false&showDeleted=false&fields=items&key=AIzaSyAW3CXP4J_8cHT41mi-W_Rt1sRPnHAZS2s'}).then(function(payLoad) {
      data = payLoad.items;
      events = data.filter(function(event) {return event.status === "confirmed";});
      events.forEach(function(event) {days[event.start.dateTime.slice(0, 10)] = 0;});  
      done();
    });
}
