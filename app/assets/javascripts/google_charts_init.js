$(function(){

  $.ajax ({
    url: "https://api.mlab.com/api/1/databases/mewpurr/collections/timestamps?apiKey=gJ-iCkDH7UGdMlgEuOEBB6XRQzgEtTj9",
    type: "GET",
    contentType: "application/json"
  }).done(function(data){

    var output = [];

    $.each(data, function(key, data) {


      var $new_date = output.push(data.date.slice(0,10));
      console.log(output.length);

      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      console.log(output);

      function drawChart() {

      function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
      }

      function onlyUnique(value, index, self) { 
          return self.indexOf(value) === index;
      }

      var unique = output.filter( onlyUnique );

      var data = google.visualization.arrayToDataTable([
        ['Day', 'Number of feedings'],
          [unique[0], getOccurrence(output, unique[0])],
          [unique[1], getOccurrence(output, unique[1])],
          [unique[2], getOccurrence(output, unique[2])]
      ]);
  
      var options = {
        chart: {
          title: 'Daily number of feedings'
        },
        vAxis: {
          title: 'Number of feedings'
        }
      };

      var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

      chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    });



    });




});


