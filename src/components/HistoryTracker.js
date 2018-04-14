import React from 'react';
import moment from 'moment';
import {floorEr, rangeFive} from '../utils/helpers';

class HistoryTracker extends React.Component{
	state = {
		color: 'aqua',
		colorList: ['aqua', 'orange', 'pink', 'blue']
	};

	/**********************************************************
	Convert List of Days to Colors 
	*/
	renderBox = (date, countHabits) => {
		let numComplete = 0, historyData = this.props.history[date] || {};
		for(let habit in historyData){
			if(historyData[habit]) numComplete++;
		}
		let classComplete = `c-chip c-${this.state.color}-` + floorEr(numComplete/ countHabits * 10);
		return (
			<div key={date} className={classComplete} data-date={date}></div>
			)
	}

	// note: react jsx interpolation does not support tick marks from es6
	renderBoxLegend = () => {
		let r = rangeFive();

		// let classComplete = `c-${this.state.color}-` + floorEr(numComplete/(Math.max(countHabits), 1) * 10);
		
		return (
			<div>
			{ rangeFive().map(i => <div key={i} className={'c-chip c-' + this.state.color + '-' + i}>{i}</div>) }
			</div>
		)
	}

	/**********************************************************
	Switch Color Palettes 
	*/
	renderColorSwitch = (color) => {
		const colorClasses = `color-switch color-switch-${color}`;
		return (
			<button className={colorClasses} key={color} onClick={()=> this.handleColorSwitch(color)}></button>
			)
	}

	handleColorSwitch = (color) => {
		this.setState({color})
	}

	/**********************************************************
	Convert List of Days to Colors 
	*/
	render(){
		const dateRange = new Array(30)
			.fill(moment().subtract(30, 'days'))
			.map((i, indx) => i.add(1, 'days')
			.format('MM-DD-YYYY'));
		const countHabits = this.props.habits ? Object.keys(this.props.habits).length : 1;
		return (
			<section className='container history card'>
			<h2>How Has Your Tracking Been?</h2>
			<p className="lead">See how you have been doing</p>
			<div className='history-grid-wrapper flexer justspacearound'>
			<div className='history-grid'>
				{dateRange.map(date => this.renderBox(date, countHabits))}
			</div>
			<div className='history-legend'>
				<h4>Choose a Color</h4>
				<div>
				{this.state.colorList.map(this.renderColorSwitch)}
				</div>
				<h4>Legend</h4>
				{this.renderBoxLegend()}
			</div>
			</div>
			</section>
		)
	}
}

export default HistoryTracker;