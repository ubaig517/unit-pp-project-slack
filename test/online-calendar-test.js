describe('Online-Calendar', function() {
  var data = [];
  var events = [];
  var days = {};
  before(function(done) {
 doStuff(done, data, events, days);
  });

  it('should have right amount of .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.be.greaterThan(112);
  }); 
  xit('should have only confirmed .event elements', function() {
    expect(document.querySelector(".event")).to.not.equal(null);
    expect(document.querySelectorAll(".event").length).to.be.lessThan(123);
  });
  it('should have right amount of .day elements',function(){
    expect(document.querySelector(".day")).to.not.equal(null);
    expect(document.querySelectorAll(".day").length).to.be.greaterThan(16);
  });

 });
mocha.globals();
mochaPhantomJS.run();

