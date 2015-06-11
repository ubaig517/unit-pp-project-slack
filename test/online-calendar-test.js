xdescribe('Online-Calendar', function() {
  var data;
  xbefore(function(done) {
    $.get('https://www.googleapis.com/calendar/v3/calendars/0uj8ecocvpma1uqq5gs9lfut0s%40group.calendar.google.com/events?timeMin=2015-06-01T00%3A00%3A00Z&alwaysIncludeEmail=false&showDeleted=false&fields=items&key=AIzaSyAW3CXP4J_8cHT41mi-W_Rt1sRPnHAZS2s').then(function(payLoad) {
      console.log(payLoad);
      done();
    });
  });
  it('should have ' +length +' .day elements', function() {
    expect(document.querySelector(".day")).to.not.equal(null);
    expect(document.querySelectorAll(".day").length).to.equal(length);
  });
  it('should have ' +length +' .week_number elements',function(){
    expect(document.querySelector(".week_number")).to.not.equal(null);
    expect(document.querySelectorAll(".week_number").length).to.equal(length);
  });
  it('should have ' +length +' .unit elements',function(){
    expect(document.querySelector(".unit")).to.not.equal(null);
    expect(document.querySelectorAll(".unit").length).to.equal(length);
  });
  it('should have ' +length +' .challenge elements',function(){
    expect(document.querySelector(".challenge")).to.not.equal(null);
    expect(document.querySelectorAll(".challenge").length).to.equal(length);
  });
  it('should have ' +length +' .goals elements',function(){
    expect(document.querySelector(".goals")).to.not.equal(null);
    expect(document.querySelectorAll(".goals").length).to.equal(length);
  });
  it('should have ' +number_of_goals +' .goal elements',function(){
    expect(document.querySelector(".goal")).to.not.equal(null);
    expect(document.querySelectorAll(".goal").length).to.equal(number_of_goals);
  });
});
mocha.globals();
mochaPhantomJS.run();

