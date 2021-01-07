window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light1", 
        title: {
            text: "Funding Requets"
        },
        axisY: {
            title: "Growth Rate (in %)",
            suffix: "%"
        },
        axisX: {
            title: "Countries"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#\"%\"",
            dataPoints: [
                { label: "India", y: 7.1 },	
                { label: "China", y: 6.70 },	
                { label: "Indonesia", y: 5.00 },
                
            ]
        }]
    });
    chart.render();
    
}