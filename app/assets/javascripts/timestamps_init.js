$(function getTimestamps(){
  $.ajax ({
    url: "https://api.mlab.com/api/1/databases/mewpurr/collections/timestamps?apiKey=gJ-iCkDH7UGdMlgEuOEBB6XRQzgEtTj9",
    type: "GET",
    contentType: "application/json"
  }).done(function(data){
    var output = '<div>';
    var i = 0;

    $.each(data, function(key, data) {
  
      output += '<h3>' +data.date+'</h3>';
      i++;
    });

    $('#timestamps').html(output);
    $('#timesfed').html(i);
    
    console.log("You've fed your cat " + i + " times");

  });
});