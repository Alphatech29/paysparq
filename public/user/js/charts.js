const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'polarArea',
  data: {
    labels: ['Physical Product', 'Digital Product'],
    datasets: [{
      label: 'Sales',
      data: [200,290], 
      backgroundColor: [
        '#3409784F',  
        '#03AFC559'   
      ]
    }]
  },
  options: {
    scales: {
     responsive: true,
    }
  }
});

const jobChart = document.getElementById('jobChart');

new Chart(jobChart, {
type: 'doughnut',
  data: {
    labels: ['Order', 'freelance', 'Virtual'],
    datasets: [{
      label: 'Sales',
      data: [60,110,50,], 
      backgroundColor: [
        '#00FD2AB2',  
        '#03AEC5A4',
        '#FFFB00B0'   
      ]
    }]
  },
  options: {
    scales: {
     responsive: true,
    }
  }
});