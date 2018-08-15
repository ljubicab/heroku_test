$(function getBooks(){
	$.ajax ({
		url: "https://api.mlab.com/api/1/databases/mewpurr/collections/alarms?apiKey=gJ-iCkDH7UGdMlgEuOEBB6XRQzgEtTj9",
		type: "GET",
		contentType: "application/json"
	}).done(function(data){
		var output = '<div>';
		$.each(data, function(key, data) {
			output += '<div>';
			output += '<h3>' +data.time+'</h3>';
		});
		output += '</div>';
		$('#times').html(output);

	});
});


