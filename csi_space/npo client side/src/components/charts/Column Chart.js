import React, { Component } from 'react';
import CanvasJSReact from '../libraries/lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
			title: {
				text: "Funding Requests"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Incomplete",  y: 20  },
					{ label: "Unsuccessful", y: 15  },
					{ label: "Successful", y: 35  },
				]
			}
			]
		}
		
		return (
		<div className="col-12 m-2 rectangleTwo d-flex flex-column justify-content-center align-items-center p-3">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;