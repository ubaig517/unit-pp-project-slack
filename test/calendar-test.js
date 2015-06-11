console.log("\n**********READ ME**********\n\nPreviously when you wrote code, you checked it was working by opening your test file in the browser - you opened index.html \n\n" +
"Now we're running tests to check our code is working just like before, but we don't do it in the browser with an index.html file, " + 
"instead we check our code by running npm test (like you just did) - here in the 'console' (sometimes also known as the 'terminal'). It's not all that different from doing it in the browser\n\nFor example, for our first test - Your Calendar 1) should have 6 .day elements: \n\nIn order to make the test go from red to green, you need to add 6 html elements with the class 'day' to your page by writing code to do so in main.js" + 
"\n\n***HINT*** \n\nUse the appendChild method\n\n")

describe('Your Calendar', function() {
=======
xdescribe('Calendar Spec', function() {
>>>>>>> (feat) add more test
  var length = schedule.length;
  var number_of_goals = schedule.reduce(function(prev, curr) {
     return prev + curr.goals.length;
  },0);
  it('should have ' +length +' .day elements (edit main.js to add the elements)', function() {
    expect(document.querySelector(".day")).to.not.equal(null);
    expect(document.querySelectorAll(".day").length).to.equal(length);
	});
	it('should have ' +length +' .week_number elements (edit main.js to add the elements)',function(){
    expect(document.querySelector(".week_number")).to.not.equal(null);
    expect(document.querySelectorAll(".week_number").length).to.equal(length);
	});
  it('should have ' +length +' .unit elements (edit main.js to add the elements)',function(){
    expect(document.querySelector(".unit")).to.not.equal(null);
    expect(document.querySelectorAll(".unit").length).to.equal(length);
  });
	it('should have ' +length +' .challenge elements (edit main.js to add the elements)',function(){
    expect(document.querySelector(".challenge")).to.not.equal(null);
    expect(document.querySelectorAll(".challenge").length).to.equal(length);
	});
	it('should have ' +length +' .goals elements (edit main.js to add the elements)',function(){
    expect(document.querySelector(".goals")).to.not.equal(null);
    expect(document.querySelectorAll(".goals").length).to.equal(length);
	});
	it('should have ' +number_of_goals +' .goal elements (edit main.js to add the elements)',function(){
    expect(document.querySelector(".goal")).to.not.equal(null);
    expect(document.querySelectorAll(".goal").length).to.equal(number_of_goals);
	});
});
mocha.globals();
mochaPhantomJS.run();
