#Online-Calendar

##Goal
In the previous challenge, you built a calendar web application with javascript, HTML, and CSS. The content of the schedule was found in the global variable "schedule". In production, data is frequently stored in remote database. In this challenge, you will connect with a remote database, extract your current week's schedule from there, and display in your calendar application.

##How do I get started
1. Copy your code from the w1-s1-calendar challenge into the main.js and index.html found in the client directory.

2. Modify your main.js code to perform a GET request to the following URL:
````
https://www.googleapis.com/calendar/v3/calendars/0uj8ecocvpma1uqq5gs9lfut0s%40group.calendar.google.com/events?timeMin=2015-06-01T00%3A00%3A00Z&alwaysIncludeEmail=false&showDeleted=false&fields=items&key=AIzaSyAW3CXP4J_8cHT41mi-W_Rt1sRPnHAZS2s
````
3. Populate your schedule with the data received from the remote server

##How do I test if my answer is correct?
Run the following code in your terminal to test your code:
````
npm test
````