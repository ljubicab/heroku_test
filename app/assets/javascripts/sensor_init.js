$(function getSensor(){
  $.ajax ({
    url: "https://api.mlab.com/api/1/databases/mewpurr/collections/sensor?apiKey=gJ-iCkDH7UGdMlgEuOEBB6XRQzgEtTj9",
    type: "GET",
    contentType: "application/json"
  }).done(function(data){

    $.each(data, function(key, data) {

      output = data.food;

    });

    $('#sensor').html(output);


  });
});