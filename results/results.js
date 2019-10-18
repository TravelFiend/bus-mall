const ctx = document.getElementById('product-chart').getContext('2d');

export const makeChart = array => {
    let names = [];
    let shounts = [];
    let clounts = [];
    
    array.forEach(product => {
        names.push(product.id);
        shounts.push(product.showCount);
        clounts.push(product.clickCount);
    });
    console.log(names, clounts, shounts);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Times Shown',
                data: shounts,
                backgroundColor: '#4B5043'
            },
            {
                label: 'Times Clicked',
                data: clounts,
                backgroundColor: '#D3FFE9'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

