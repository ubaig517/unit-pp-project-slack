# Skills Builder Unit 4

#Calendar

##Goal
The goal of this challenge is to create your own personal calendar. The content of your calendar can be accessed through the global variable "schedule"; use javascript, HTML, and CSS to render the content onto your page. You will be using this calendar for the next two weeks, so make it pretty!

##How do I get started
1. After forking and cloning this repo (see the [js fundamentals README.md](https://github.com/CodesmithLLC/unit-1-js-fundamentals) if needed), run the following two commands in your terminal (just like we did in the snake game):
  ````
  npm install
  ````
1. To install front-end essential libraries (also called dependencies), run the following command:
  ````
  bower install
  ````

1. See the [Snake Skills Builder README](https://github.com/CodesmithLLC/unit-4-snake/blob/master/README.md) for more information.

1. Our goal in this challenge is to display a calendar of events that are going on right now. If you open up `index.html` you'll see what we've given you to start with. Open up your javascript console and see whats being logged in there.

1. This `index.html` file is loading any javascript that you write in `client/main.js` (There are some comments in there to help get you on your way as well.)


1. Before we had our test running in a web browser, in this challenge we're introducing the concept of tests that run in your terminal. These tests will display their error messages in your terminal rather than the web browser, run `npm test` to try it out. These tests test that elements with certain classes are drawn on the page, they also test that the right amount of elements are drawn. 

## Getting started
1. Complete the challenge by adding code to client/main.js file

  - The schedule is found in the global variable `schedule` which can be accessed as such:
  ````
  console.log(schedule);
  ````

1. This variable `schedule` is an array of objects, think about looping through this array and displaying the different properties of those objects.

1. You can add a new element to the page by calling `document.body.appendChild(<custom node>)` and passing in a DOMnode.

1. You can create a HTML element by calling `document.createElement(<element type>)` and saying what type of element you want to create, example: `document.createElement('h1')`

1. View your page by opening the index.html page in your browser. Style the page accordingly.
