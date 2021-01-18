import React, { Component } from 'react';
import CanvasJSReact from '../libraries/lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class ColumnLineAreaChart extends Component {
		constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.addSymbols = this.addSymbols.bind(this);
	}
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			colorSet: "colorSet2",
			title: {
				text: "Budget"
			},
			axisX: {
				valueFormatString: "MMMM"
			},
			axisY: {
				prefix: "$",
				labelFormatter: this.addSymbols
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [{
				type: "column",
				name: "Actual ",
				showInLegend: true,
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2017, 0), y: 27500 },
					{ x: new Date(2017, 1), y: 29000 },
					{ x: new Date(2017, 2), y: 22000 },
					{ x: new Date(2017, 3), y: 26500 },
					{ x: new Date(2017, 4), y: 33000 },
				]
			},{
				type: "line",
				name: "Expected",
				showInLegend: true,
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2017, 0), y: 38000 },
					{ x: new Date(2017, 1), y: 39000 },
					{ x: new Date(2017, 2), y: 35000 },
					{ x: new Date(2017, 3), y: 37000 },
					{ x: new Date(2017, 4), y: 42000 },
				]
			},{
				type: "area",
				name: "Profit",
				markerBorderColor: "white",
				markerBorderThickness: 2,
				showInLegend: true,
				yValueFormatString: "$#,##0",
				dataPoints: [
					{ x: new Date(2017, 0), y: 11500 },
					{ x: new Date(2017, 1), y: 10500 },
					{ x: new Date(2017, 2), y: 9000 },
					{ x: new Date(2017, 3), y: 13500 },
					{ x: new Date(2017, 4), y: 13890 },
				]
			}]
		}
		
		return (
		<div className="col-12 m-2 rectangleTwo d-flex flex-column justify-content-center align-items-center p-3">
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnLineAreaChart;