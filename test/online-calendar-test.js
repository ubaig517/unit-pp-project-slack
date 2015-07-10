describe('Online-Calendar', function() {
  var data;
  before(function(done) {
    $.get('https://www.googleapis.com/calendar/v3/calendars/0uj8ecocvpma1uqq5gs9lfut0s%40group.calendar.google.com/events?timeMin=2015-06-01T00%3A00%3A00Z&alwaysIncludeEmail=false&showDeleted=false&fields=items&key=AIzaSyAW3CXP4J_8cHT41mi-W_Rt1sRPnHAZS2s').then(function(payLoad) {
      data = payLoad.items;
      done();
    });
    var events = data.filter(function(event) {return event.status === "confirmed";});
    var days = {};
    events.forEach(function(event) {days[event.start.dateTime.slice(0, 10)] = 0});  
  });
  it('should have ' + events.length +' .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.be.greaterThan(events.length);
  }); 
  xit('should have only ' + events.length +' confirmed .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.equal(events.length);
  });
  it('should have ' + Object.keys(days).length +' .day elements',function(){
    expect(document.querySelector(".day")).to.not.equal(null);
    expect(document.querySelectorAll(".day").length).to.be.greaterThan(Object.keys(days).length - 1);
  });
 });
mocha.globals();
mochaPhantomJS.run();

