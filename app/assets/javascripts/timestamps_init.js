$(function getTimestamps(){
  $.ajax ({
    url: "https://api.mlab.com/api/1/databases/mewpurr/collections/timestamps?apiKey=gJ-iCkDH7UGdMlgEuOEBB6XRQzgEtTj9",
    type: "GET",
    contentType: "application/json"
  }).done(function(data){

    var i = 0;

    $.each(data, function(key, data) {

      $("#timestamps").prepend('<tr>' + '<th>' +data.date.substring(0, data.date.length -17) +'</th>' + '<th>' +data.date.substring(11, data.date.length -11) +'</th>' +'</tr>');

      i++;
    });


    $('#timesfed').html(i);
    
    console.log("You've fed your cat " + i + " times");

  });
});

//https://stackoverflow.com/questions/11112418/how-to-output-reverse-order-ajax-file-div