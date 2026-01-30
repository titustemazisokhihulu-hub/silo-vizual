// Memanggil library Chart.js dari CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

script.onload = () => {
  const dscc = require('@google/dscc');

  function drawViz(data) {
    // Buat canvas untuk chart
    document.body.innerHTML = '<div style="position: relative; height:90vh; width:90vw"><canvas id="myChart"></canvas></div>';
    
    const ctx = document.getElementById('myChart').getContext('2d');
    
    // Ambil data dari Looker Studio
    const labels = data.tables.DEFAULT.map(row => row.dimID[0]);
    const values = data.tables.DEFAULT.map(row => row.metricID[0]);

    // Buat Chart
    new Chart(ctx, {
      type: 'bar', // Bisa diganti 'line', 'pie', dll
      data: {
        labels: labels,
        datasets: [{
          label: 'Data Silo',
          data: values,
          backgroundColor: data.style.barColor.value ? data.style.barColor.value.color : '#4285F4',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // Langganan data dari Looker Studio
  dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
};
