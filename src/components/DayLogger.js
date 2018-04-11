import React from 'react';
import moment from 'moment';

class DayLogger extends React.Component{
	state = {
		logDate: moment()
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
	Show Buttons to Log 3 Days Back to Today
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
	Render
	*/

	render(){
		return (
			<div>
				{ /* this.renderDateSwitcher() */}

				{ Object.keys(this.props.habits).map( habit => (
					<label>{habit}
					<input 
					type="checkbox" 
					name={habit} 
					value={this.props.history[this.state.logDate] && this.props.history[this.state.logDate][habit] === true}
					onChange={(e)=>this.props.logHistory(this.state.logDate, habit, true)} 
					/>
					</label>
					)) 
				}
			</div>
		)
	}
}

export default DayLogger;