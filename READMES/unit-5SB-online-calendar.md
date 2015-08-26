#Online-Calendar

##Goal
In the previous challenge, you built a calendar web application with javascript, HTML, and CSS. The content of the schedule was found in the global variable "schedule". In production, data is frequently stored in remote database.
In this challenge you have 3 main tasks,

1. You will need to make an ajax request to a database on a remote url.
1. You will need to extract your current week's schedule from there. 
1. You will need to display this data in your calendar application.

##How do I get started
1. Run your `bower install`, and `npm install`.
1. Switch back to your master branch and copy your code from the index.html and the main.js

2. Modify your main.js code to perform a GET request to the following URL:
````
http://slack-server.elasticbeanstalk.com/calendar/1
````
***Warning: The format of the data received from the URL will be different from the schedule object given in the previous challenge*** 

3. Populate your schedule with the new data received from the remote server

4. To view your calendar, open index.html in your browser

##How do I test if my answer is correct?
Run the following code in your terminal to test your code:
````
npm test
````
