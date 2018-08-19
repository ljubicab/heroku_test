$(function getAlarms(){
	$.ajax ({
		url: "https://api.mlab.com/api/1/databases/mewpurr/collections/alarms?apiKey=gJ-iCkDH7UGdMlgEuOEBB6XRQzgEtTj9",
		type: "GET",
		contentType: "application/json"
	}).done(function(data){
		var output = '<div>';
    var i = 0;
		$.each(data, function(key, data) {
	
			output += '<h3>' +data.time+'</h3>';
      i++;
		});

    console.log("You've fed your cat " + i + " times");
		$('#times').html(output);
    $('#timesfed').html(i);
	});


	google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
      ]);

      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
      chart.draw(data, null);
    }

    google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

});
