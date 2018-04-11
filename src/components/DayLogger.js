import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types'; 

class DayLogger extends React.Component{
	static propTypes = {
		habits: PropTypes.object,
		history: PropTypes.object,
		logHistory: PropTypes.func.isRequired
	};

	state = {
		logDate: moment().format('MM-DD-YYYY')
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

	renderCheckBox = (habitName, historicalData) => {
		const habitHistory = this.props.history[this.state.logDate] ? this.props.history[this.state.logDate][habitName] : {};
	}

	/**********************************************************
	Render
	*/

	render(){
		const dayHistory = this.props.history[this.state.logDate] || {};
		console.log(dayHistory);
		console.log(this.props.history);

		return (
			<div>
				{ /* this.renderDateSwitcher() */}
				<ul>
					{Object.keys(this.props.habits).map( indx => (
					<li key={indx}>
					<label>
					<input 
					type="checkbox"
					defaultChecked={dayHistory[this.props.habits[indx]]}
					name={this.props.habits[indx]}
					onChange={(event)=> this.props.logHistory(this.state.logDate, this.props.habits[indx], event.target.checked )}
					/>
					{this.props.habits[indx]}
					</label>

					</li>
						))}
				</ul>

				{/*
				// show all the habits 

				// if habits[todayhistory ] = true, check it 
				*/}

			</div>
		)
	}
}

export default DayLogger;