document.addEventListener('DOMContentLoaded', function () {
    // Combine data for all three metrics into one chart
    const ctx = document.getElementById('combinedChart').getContext('2d');
    const combinedChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'], // Time labels
            datasets: [
                {
                    label: 'Light Intensity',
                    data: [30, 35, 38, 42, 45, 50, 48], // Example data
                    borderColor: '#4E73DF', // Blue color
                    backgroundColor: 'rgba(78, 115, 223, 0.1)', // Light blue fill
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: '#4E73DF',
                    pointRadius: 3,
                },
                {
                    label: 'Moisture',
                    data: [20, 22, 23, 24, 25, 28, 26], // Example data
                    borderColor: '#1CC88A', // Green color
                    backgroundColor: 'rgba(28, 200, 138, 0.1)', // Light green fill
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: '#1CC88A',
                    pointRadius: 3,
                },
                {
                    label: 'Temperature',
                    data: [50, 52, 53, 55, 56, 60, 58], // Example data
                    borderColor: '#F6C23E', // Orange color
                    backgroundColor: 'rgba(246, 194, 62, 0.1)', // Light orange fill
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2,
                    pointBackgroundColor: '#F6C23E',
                    pointRadius: 3,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    borderColor: '#333333',
                    borderWidth: 1,
                    caretPadding: 10,
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Time',
                        color: '#858796',
                        font: {
                            size: 14,
                            family: "'Nunito', sans-serif",
                        },
                        padding: {top: 10}
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(234, 236, 244, 1)',
                        zeroLineColor: 'rgba(234, 236, 244, 1)',
                        drawBorder: false,
                    },
                    title: {
                        display: true,
                        text: 'Value',
                        color: '#858796',
                        font: {
                            size: 14,
                            family: "'Nunito', sans-serif",
                        },
                        padding: {left: 10, right: 10}
                    },
                    ticks: {
                        beginAtZero: true,
                        maxTicksLimit: 5,
                        padding: 10,
                    },
                }
            }
        }
    });
});
