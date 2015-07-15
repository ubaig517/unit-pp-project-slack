#Online-Chatroom

##Goal
[AJAX](https://en.wikipedia.org/wiki/Ajax_(programming) (asynchronous Javascript and XML) allows the browser to communicate with an external server without reloading the page. Prior to AJAX the browser would need to refresh the page in order to change. Imagine your entire web page refreshing whenever a new Tweet was posted.

![inline](https://i-msdn.sec.s-msft.com/dynimg/IC690875.png)

The browser sends a ```request``` object to the server with information regarding what the browers plans to the do with the server. A large part of the instruction is included in the [request headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)   

![inline](https://trafficserver.readthedocs.org/en/4.0.x/_images/http_headers.jpg)

## Types of Request
- GET
- POST
- PUT
- DELETE

*GET* requests are primarily used for fetching data from a the server. For example, when you load faceboook, your browser is making a GET request for all of your friends' latest post to populate the news feed. *POST* requests are used to provide data to the server. Whenever you are using Facebook messengers, and you send a message - a POST request is being made by your browser to add your message the server. *PUT* requests are used to update data on the server. *DELETE* requests
inform the server that some data needs to be deleted. 

There are many ways to make an AJAX requests to a server. It can be done with javascript without having to load any external files. External files - such as jQuery - make it easier to use AJAX requests.

![inline](http://www.devbattles.com/en/images/upload/1427973218.png)

In this challenge, we will augmenting our calendar that we build in the previous Skills Builder(https://github.com/CodesmithLLC/unit-project-slack) by using data from an external server. We will then add a chatroom to our calendar.

##How do I get started
1. There are two parts to this challenge:
  -fetching extra calendar events from Google's server
  -adding a chatroom feature to your calendar

###Online-Calendar
1.
````
https://www.googleapis.com/calendar/v3/calendars/pe13s26rvf4fud47l08ti750i0@group.calendar.google.com/events?key=AIzaSyAyucc-d1nuZQnRsbMeZ1RtP04ZIdKr0qU
````

###Online-Chatroom
1. Create a chatroom element using html and javascript (feel free to use jQuery).
  - Create an area where incoming messages are displayed
  - Create an input and button where your messages can be sent

1. To retrieve and input messages from the server, make GET and POST requests to the following endpoint:
````
http://calendar-server.elasticbeanstalk.com/messages
````

###How do I test if my answer is correct?
Run the following the command in the terminal:
````
npm test
````



