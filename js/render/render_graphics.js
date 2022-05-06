const createGraph = (element) => {
    return new Chart(element.target, {
        type: element.type,
        data: {
            labels: element.data.labels,
            datasets: [{
                label: element.name,
                data: element.data.values,
                backgroundColor: element.colors,
                color: 'white'
            }]
        },
        options: { 
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                    }
                }
            }
        }
    });
}