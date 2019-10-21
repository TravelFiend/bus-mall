export const makeChart = array => {
    const ctx = document.getElementById('product-chart').getContext('2d');
    let names = [];
    let shounts = [];
    let clounts = [];
    
    array.forEach(product => {
        names.push(product.id);
        shounts.push(product.showCount);
        clounts.push(product.clickCount);
    });
    
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
                backgroundColor: '#090909'
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

export const makeTotalsChart = array => {
    const totalsChart = document.getElementById('totals-chart').getContext('2d');
    let names = [];
    let shounts = [];
    let clounts = [];

    array.forEach(product => {
        names.push(product.id);
        shounts.push(product.showCount);
        clounts.push(product.clickCount);
    });

    new Chart(totalsChart, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Total Times Shown',
                data: shounts,
                backgroundColor: '#4B5043'
            },
            {
                label: 'Total Times Clicked',
                data: clounts,
                backgroundColor: '#090909'
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