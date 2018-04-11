import React from 'react';
import moment from 'moment';

class DayLogger extends React.Component{
	state = {
		logDate: moment().format()
	}

	/**********************************************************
	Update Which Date is Being Logged
	*/

	prevDate = () => {
		const newDate = moment.max(this.state.subtract(1, 'days'), this.state.subtract(4, 'days'));
		this.setState = {logDate: newDate};
	}

	addDate = () => {
		const newDate = moment.min(this.state.add(1, 'days'), moment());
		this.setState = {logDate: newDate};
	}


	/**********************************************************
	Render Buttons to Log 3 Days Back to Today
	*/

	renderDateSwitcher = () => {
		const minDate = moment().subtract(4, 'days');
		const maxDate = moment();

	// return (
	// 	<button 
	// 	className="date-shift date-shift-prev" 
	// 	{ moment(this.state.logDate).isSameOrBefore(minDate) ? "disabled" : (onClick={this.prevDate}) }
	// 	>Back</button>

	// 	<div>{(this.state.logDate).format('MM-DD-YYYY')}</div>

	// 	<button 
	// 	className="date-shift date-shift-add" 
	// 	{ moment(this.state.logDate).isSameOrAfter(maxDate) ? "disabled" : (onClick={this.addDate}) }
	// 	>Back</button>

	// 	)
	}


	/**********************************************************
	Render List Items
	*/

	// renderCheckBox = (habitName, historicalData) => {
	// 	return (
	// 				<li key={indx}>
	// 				<label>{this.props.habits[indx]}
	// 				<input 
	// 				type="checkbox" 
	// 				name={this.props.habits[indx]} 
	// 				value={this.props.history[this.state.logDate] && this.props.history[this.state.logDate][this.props.habits[indx]] === true}
	// 				onChange={()=> this.props.logHistory(this.state.logDate, this.props.habits[indx], true)} 
	// 				/>
	// 				</label>
	// 				</li>
	// 				)
	// }

	/**********************************************************
	Render
	*/

	render(){
		return (
			<div>
				{ /* this.renderDateSwitcher() */}
				<ul>
				{ Object.keys(this.props.habits).map( indx => (
					<li key={indx}>
					<label>{this.props.habits[indx]}
					<input 
					type="checkbox" 
					name={this.props.habits[indx]} 
					value={this.props.history[this.state.logDate] && this.props.history[this.state.logDate][this.props.habits[indx]] === true}
					onChange={()=> this.props.logHistory(this.state.logDate, this.props.habits[indx], true)} 
					/>
					</label>
					</li>
					)) 
				}
				</ul>
			</div>
		)
	}
}

export default DayLogger;