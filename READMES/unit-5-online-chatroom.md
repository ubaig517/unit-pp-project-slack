#Online-Slack

##Summary
[AJAX](https://en.wikipedia.org/wiki/Ajax_(programming) (asynchronous Javascript and XML) allows the browser to communicate with an foreign server without reloading the page. 

![inline](https://i-msdn.sec.s-msft.com/dynimg/IC690875.png)

Imagine your entire web page refreshing whenever a new Tweet was posted - that's crazy. Prior to AJAX the browser would need to refresh the page in order to change. With AJAX, we can send a request to the server and - when the server responds - we can modify the page dynamically with javascript.

###Request
The browser sends a `request` object to the server with information regarding what the brower's intention are with the server. There are major requests types (or methods) that provided valueable information about the browsers intention 

- GET
- POST
- PUT
- DELETE

**GET** requests are primarily used for fetching data from a the server. For example, when you load Faceboook, your browser is making a GET request for all of your friends' latest post to populate the news feed. **POST** requests are used to provide data to the server. Whenever you are using Facebook messengers, and you send a message - a POST request is being made by your browser to add your message the server. *PUT* requests are used to update data on the server. *DELETE* requests inform the server that some data needs to be deleted. 

###HTTP Headers
![](https://trafficserver.readthedocs.org/en/4.0.x/_images/http_headers.jpg)

In addition to the request methods, a large part of the instructions is included in the [request headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)   

A few examples of what is provided in the HTTP headers:
Accept: Informs the server what file types that browser expects from the server
User-Agent: Information about the method at which the browser is communicating with the server

##How do I get started

1. There are two parts to this challenge:
  -fetching extra calendar events from Google's server
  -adding a chatroom feature to your calendar

 - Both challenges require you to make an AJAX request - but to different servers. 

 - There are many ways to make an AJAX requests to a server. It can be done with javascript without having to load any external files. External files - such as jQuery - make it easier to make AJAX requests.

1. We will be working on this challenge on a separate branch from the ```master``` branch

1. To create a new branch, type the following command in the command line:
````
git checkout -b unit-5-online-chatroom 
````

1. To update our new branch with files from the Codesmith Github Organization, we first need to link our local repository to the Codesmith Github Organization. To add a remote - which we will name ```upstream``` - to our local repository, runing the following command in your terminal.
````
git remote add upstream https://github.com/CodesmithLLC/unit-project-slack.git
````

1. To update the branch with our new files, run the following line in terminal:
````
git pull upstream unit-5-online-slack
````

###Online-Calendar
1. To connect to a remote server, make an AJAX GET request to the following location:
````
http://slack-server.elasticbeanstalk.com/calendar/1
````

1. Update your calendar from the previous challenge to include data from the AJAX request.  

1. Some boilerplate code is in there to get you started/ refactor your old solution into a more object Oriented Approach

###Online-Chatroom
1. Create an area where chat messages can be displayed. 

1. Retrieve the messages by making a GET request to the following URI:
````
http://calendar-server.elasticbeanstalk.com/messages
````

1. Create a text input and submit button where users of your chatroom can enter and submit their messages.

1. Post messages to the server by making a POST request to the same URI as above. Include a body with your AJAX request that includes information about your message. The body should contain the properties ```created_by``` and ```message```. Below is a sample message:
````
{
  created_by: "Alex Zai",
  message: "Sample message"
}
````

###How do I test if my answer is correct?
Run the following the command in the terminal:
````
npm test
````
