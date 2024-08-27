document.addEventListener('DOMContentLoaded', function() {
  // Khởi tạo biểu đồ khi trang tải
  showTemperatureChart();
});

document.getElementById('btn-nhietdo').addEventListener('click', showTemperatureChart);
document.getElementById('btn-doam').addEventListener('click', showHumidityChart);
document.getElementById('btn-anhsang').addEventListener('click', showLightChart);

function showTemperatureChart() {
  document.getElementById('temperatureChart').style.display = 'block';
  document.getElementById('humidityChart').style.display = 'none';
  document.getElementById('lightChart').style.display = 'none';

  // Vẽ biểu đồ nhiệt độ
  createTemperatureChart();
}

function showHumidityChart() {
  document.getElementById('temperatureChart').style.display = 'none';
  document.getElementById('humidityChart').style.display = 'block';
  document.getElementById('lightChart').style.display = 'none';

  // Vẽ biểu đồ độ ẩm
  createHumidityChart();
}

function showLightChart() {
  document.getElementById('temperatureChart').style.display = 'none';
  document.getElementById('humidityChart').style.display = 'none';
  document.getElementById('lightChart').style.display = 'block';

  // Vẽ biểu đồ ánh sáng
  createLightChart();
}

function createTemperatureChart() {
  var ctx = document.getElementById('temperatureChart').getContext('2d');
  new Chart(ctx, {
      type: 'line', // Hoặc loại biểu đồ bạn muốn
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
              label: 'Temperature',
              data: [30, 25, 35, 40, 45],
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              fill: false
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function createHumidityChart() {
  var ctx = document.getElementById('humidityChart').getContext('2d');
  new Chart(ctx, {
      type: 'bar', // Hoặc loại biểu đồ bạn muốn
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
              label: 'Humidity',
              data: [50, 60, 55, 70, 65],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function createLightChart() {
  var ctx = document.getElementById('lightChart').getContext('2d');
  new Chart(ctx, {
      type: 'pie', // Hoặc loại biểu đồ bạn muốn
      data: {
          labels: ['Light 1', 'Light 2', 'Light 3'],
          datasets: [{
              label: 'Light Intensity',
              data: [10, 20, 30],
              backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
              borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true
      }
  });
}
