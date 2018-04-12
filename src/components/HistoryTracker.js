import React from 'react';
import moment from 'moment';

class HistoryTracker extends React.Component{

	/**********************************************************
	Convert List of Days to Colors 
	*/
	renderBox(date, countHabits){

		return (
			<div key={date}>{date}</div>
			)

		const historyData = this.props.history[date];
		const numComplete = historyData ? Object.keys(historyData).filter(i => historyData[i]).length : 0;
		
		const classNames = {};
		classNames['history-box'] = true ;
		classNames['color-1'] = false && Math.floor(numComplete / countHabits) ;

		return (
			<div key={date} className={classNames}>{date} | hist data: {historyData} | countHabits: {countHabits}}</div>
			)
	}

	/**********************************************************
	Convert List of Days to Colors 
	*/
	render(){
		const dateRange = new Array(30)
			.fill(moment().subtract(30, 'days'))
			.map((i, indx) => i.add(1, 'days')
			.format('MM-DD-YYYY'));
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