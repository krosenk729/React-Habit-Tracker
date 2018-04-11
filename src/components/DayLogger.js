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
		const newDate = moment.max( moment(this.state.logDate, 'MM-DD-YYYY').subtract(1, 'days'), moment(this.state.logDate, 'MM-DD-YYYY').subtract(4, 'days')).format('MM-DD-YYYY');
		console.log(newDate);
		this.setState({logDate: newDate});
	}

	nextDate = () => {
		const newDate = moment.min( moment(this.state.logDate, 'MM-DD-YYYY').add(1, 'days'), moment()).format('MM-DD-YYYY');
		console.log(newDate);
		this.setState({logDate: newDate});
	}


	/**********************************************************
	Render Buttons to Log 3 Days Back to Today
	*/

	renderDateSwitcher = () => {
		const minDate = moment().subtract(4, 'days');
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

		// <div>{(this.state.logDate).format('MM-DD-YYYY')}</div>

		// <button 
		// className="date-shift date-shift-add" 
		// { moment(this.state.logDate).isSameOrAfter(maxDate) ? "disabled" : (onClick={this.addDate}) }
		// >Back</button>
	/**********************************************************
	Render
	*/

	render(){
		const dayHistory = this.props.history[this.state.logDate] || {};
		return (
			<div>
				{ this.renderDateSwitcher() }
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