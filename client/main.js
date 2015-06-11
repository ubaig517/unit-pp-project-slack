// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement('div');
title.innerHTML = 'Pretty Calendar';
document.body.appendChild(title);

var link = "https://www.googleapis.com/calendar/v3/calendars/0uj8ecocvpma1uqq5gs9lfut0s%40group.calendar.google.com/events?timeMin=2015-06-01T00%3A00%3A00Z&alwaysIncludeEmail=false&showDeleted=false&fields=items&key=AIzaSyAW3CXP4J_8cHT41mi-W_Rt1sRPnHAZS2s";

var schedule;
var responseObj = $.get(link, function(data){
   schedule = data.items;
   init();

}, "json");


var table = document.createElement('table');
table.className = "calendar";
var days = {
	"Sunday": 0, 
	"Monday": 1, 
	"Tuesday": 2, 
	"Wednesday": 3, 
	"Thursday": 4, 
	"Friday": 5, 
	"Saturday": 6};
// Your schedule can be accessed through the global object "schedule"
function init(){
	createTable();
	populate();
}
function createTable() {
	var tbody = document.createElement('tbody');
	//make table heading row
	var headtr = document.createElement('tr');
	for (day in days){
		var th = document.createElement('th');
		th.appendChild(document.createTextNode(day));
		headtr.appendChild(th);
	}
	tbody.appendChild(headtr);
	var days = 0;
	for(var i =1; i<5; i++){
		var tr = document.createElement('tr');
		tr.id = "week" + i;
		for (var j =0; j<7; j++){
			var td = document.createElement('td');
			td.id = days;
			tr.appendChild(td);
			days++;
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);

	document.body.appendChild(table);
}

function populate(){
	console.log(schedule);
	for (i in schedule){
		console.log(schedule[i]);
		var day = schedule[i]["start"]["dateTime"].slice(8, 10);
		day = parseInt(day).toString();
		makeEvent(day, schedule[i]);
	}
}

function makeEvent(day, event){
	var cell = document.getElementById(day);
	var div = document.createElement('div');


	cell.appendChild(div);


}

// function makeCell(row, col, i){
// 	var cell = table.rows[row].cells[col];
// 	cell.className = "week_number";
// 	var unit = document.createElement('p');
// 	unit.className = "unit";
// 	var day = document.createElement('p');
// 	day.className = "day";
// 	var goals = document.createElement('ul');
// 	goals.className = "goals";
// 	var challenge = document.createElement('h3');
// 	challenge.className = "challenge";
// 	unit.appendChild(document.createTextNode("Unit " + schedule[i]["unit"]));
// 	//day.appendChild(document.createTextNode(schedule[i]["day"]));
// 	for (index in schedule[i]["goals"]){
// 		var li = document.createElement('li');
// 		li.className = "goal";
// 		li.appendChild(document.createTextNode(schedule[i]["goals"][index]));
// 		goals.appendChild(li);
// 	}
// 	challenge.appendChild(document.createTextNode(schedule[i]["challenge"]));
// 	cell.appendChild(day);
// 	cell.appendChild(unit);
// 	cell.appendChild(challenge);
// 	cell.appendChild(goals);
// }




