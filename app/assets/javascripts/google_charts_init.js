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
          [unique[unique.length-7], getOccurrence(output, unique[unique.length-7])],
          [unique[unique.length-6], getOccurrence(output, unique[unique.length-6])],
          [unique[unique.length-5], getOccurrence(output, unique[unique.length-5])],
          [unique[unique.length-4], getOccurrence(output, unique[unique.length-4])],
          [unique[unique.length-3], getOccurrence(output, unique[unique.length-3])],
          [unique[unique.length-2], getOccurrence(output, unique[unique.length-2])],
          [unique[unique.length-1], getOccurrence(output, unique[unique.length-1])]
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


