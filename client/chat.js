//AUTHORS: Jasmine Giang and Jae Ro

//object of colors associated with authors
var colors = {
	Rob: "#82B4E6", 
	Travis: "#99CC99", 
	Jasmine: "#BCA0E6", 
	Victoria: "#FFB2FF"
};
var profiles = {
	Rob: "https://www.linkedin.com/in/robawilkinson", 
	Travis: "https://www.facebook.com/travis.sorensen.79?fref=ts", 
	Jasmine: "https://www.facebook.com/jasmine.giang?fref=ts", 
	Victoria: "https://www.facebook.com/vicky.lee.167527?fref=ts"
};

//keeps track of message number to only update on new message
var message_number = 0;

//initial populate and get request
function getData(bool) {
	$.getJSON("http://calendar-server.elasticbeanstalk.com/messages").done(function(data){
		populate(data, message_number);
		if (bool){
			$('#CHAT').scrollTop($("#CHAT")[0].scrollHeight);
		}
	});	
}
//initial
getData(true);


//on enter 
$('body').on('keydown', function(e) {
	if (e.keyCode === 13){
		var msg = document.getElementById('textbox');
		var usr = document.getElementById('user');
		if (msg.value !== "" && usr.value !== ""){ 
			var obj = JSON.stringify({created_by: usr.value, message: msg.value});
			$.ajax({
				type: "POST",
				url: "http://calendar-server.elasticbeanstalk.com/messages",
				data: obj,
				contentType: "application/json"
			});
			msg.value = null;
			document.getElementById('slap').play();
			getData(true);
		}	
	}
});

//auto refresh
setInterval(function(){
	getData(false);
}, 800);

//populate messages
function populate(data, i) {
	var chatRoom = document.getElementById('chatRoom');
	for (; i < data.length; i++){
		var chat = data[i];
		var author = chat.created_by;
		var message = chat.message;
		var messageRow = document.createElement('tr');
		// messageRow.id = "message" + message_number;
		var authorCol = document.createElement('td');
		var messageCol = document.createElement('td');
		var space = document.createElement('td');
		space.innerHTML = "";
		authorCol.innerHTML = "<h4>" + author + "</h4>";
		messageCol.innerHTML = "<h5>" + message + "</h5>";

		messageRow.appendChild(authorCol);
		messageRow.appendChild(space);
		messageRow.appendChild(messageCol);

		chatRoom.appendChild(messageRow);
		// document.getElementById('message' + message_number).style.webkitTransition = 'background-color 2s ease-in-out';
		message_number++;
	}
}



