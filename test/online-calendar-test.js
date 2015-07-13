describe('Online-Calendar', function() {
  var data;
  var events;
  var days;
  before(function(done) {
    $.ajax({
        method: 'GET',
        url: 'https://www.googleapis.com/calendar/v3/calendars/0uj8ecocvpma1uqq5gs9lfut0s%40group.calendar.google.com/events?timeMin=2015-06-01T00%3A00%3A00Z&alwaysIncludeEmail=false&showDeleted=false&fields=items&key=AIzaSyAW3CXP4J_8cHT41mi-W_Rt1sRPnHAZS2s'}).then(function(payLoad) {
      data = payLoad.items;
      events = data.filter(function(event) {return event.status === "confirmed";});
      days = {};
      events.forEach(function(event) {days[event.start.dateTime.slice(0, 10)] = 0});  
      done();
    });
     });
  it('should have right amount of .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.be.greaterThan(events.length);
  }); 
  xit('should have only confirmed .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.equal(events.length);
  });
  it('should have right amount of .day elements',function(){
    expect(document.querySelector(".day")).to.not.equal(null);
    expect(document.querySelectorAll(".day").length).to.be.greaterThan(Object.keys(days).length - 1);
  });
 });
mocha.globals();
mochaPhantomJS.run();

