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
		const newDate = moment.max( moment(this.state.logDate, 'MM-DD-YYYY').subtract(1, 'days'), moment(this.state.logDate, 'MM-DD-YYYY').subtract(3, 'days')).format('MM-DD-YYYY');
		this.setState({logDate: newDate});
	}

	nextDate = () => {
		const newDate = moment.min( moment(this.state.logDate, 'MM-DD-YYYY').add(1, 'days'), moment()).format('MM-DD-YYYY');
		this.setState({logDate: newDate});
	}


	/**********************************************************
	Render Buttons to Log 3 Days Back to Today
	*/

	renderDateSwitcher = () => {
		const minDate = moment().subtract(3, 'days');
		const maxDate = moment();

	return (
		<React.Fragment>
		<button 
		className="date-shift date-shift-prev"
		disabled={moment(this.state.logDate, 'MM-DD-YYYY').isSameOrBefore(minDate, 'day')}
		onClick={this.prevDate}
		>Back</button>
		<div>{this.state.logDate}</div>
		<button 
		className="date-shift date-shift-next"
		disabled={moment(this.state.logDate, 'MM-DD-YYYY').isSameOrAfter(maxDate, 'day')}
		onClick={this.nextDate}
		>Forward</button>
		</React.Fragment>
		)
	}


	/**********************************************************
	Render List of Habits for a Day
	*/

	renderDateHabits = (indx) => {
		const dayHistory = this.props.history[this.state.logDate] || {};
		const habit = this.props.habits[indx];

		return (
					<li key={indx}>
					<label>
					<input 
					type="checkbox"
					checked={dayHistory[indx] === true}
					name={habit}
					onChange={(event)=> this.props.logHistory(this.state.logDate, indx, event.target.checked )}
					/>
					{habit}
					</label>
					</li>
			)

	}

	/**********************************************************
	Render
	*/

	render(){
		return (
		<section className="container logger">
			<header>
			{ this.renderDateSwitcher() }
			</header>
			<ul>
				{Object.keys(this.props.habits).map(this.renderDateHabits)}
			</ul>
		</section>
		)
	}
}

export default DayLogger;