import React from 'react';
import moment from 'moment';

class HistoryTracker extends React.Component{

	/**********************************************************
	Convert List of Days to Colors 
	*/
	renderBox(date, countHabits){
		const historyData = this.props.history[date];
		const numComplete = historyData ? Object.keys(historyData).filter(i => historyData[i]).length : 0;
		const colorPercent = Math.floor(numComplete / countHabits) ;

		return (
			<div className='col-{colorPercent}'></div>
			)
	}
	render(){
		const dateRange = new Array(30).fill(moment().subtract(30, 'days')).map((i, indx) => i.add(indx, 'days'));
		const countHabits = this.props.habits ? Object.keys(this.props.habits).length : 0;
		return (
			<div className="history">
			<h2>How Has Your Tracking Been?</h2>
			<div className="history-grid">
				{dateRange.map(date => this.renderBox(date, countHabits))}
			</div>
			</div>
		)
	}
}

export default HistoryTracker;