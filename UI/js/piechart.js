google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Orders', 'Order category'],
    ['Foods',     11],
    ['Drinks',      2],
    ['Electronics',  2],
    ['Parcels', 2],
    ['others',    7]
  ]);

  var options = {
    title: 'My Daily Oders'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}