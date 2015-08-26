// jquery is available in this file if you bower installed properly

$(document).on('ready', function() {
  var title = $('<h1>').text('Social Calendar');
  $('body').append(title);
  console.log(title);
  $.get('http://slack-server.elasticbeanstalk.com/calendar/1').success(function(data) {
    console.log(data);
  });
});
