import React from 'react';
import PropTypes from 'prop-types'; 

class HabitCreator extends React.Component{
	static propTypes = {
		habits: PropTypes.object,
		changeHabit: PropTypes.func.isRequired,
		removeHabit: PropTypes.func.isRequired
	};

	/**********************************************************
	Add a Habit
	*/
	newHabitRef = React.createRef();
	handleNewHabit = (event) => {
		event.preventDefault();
		const habit = this.newHabitRef.current ? this.newHabitRef.current.value : event.target.newHabit.value;
		
		this.props.changeHabit(habit);
		event.target.reset();
	}

	handleChangeHabit = (event) => {
		const habit = event.currentTarget ? event.currentTarget.value : event.target.value;
		this.props.changeHabit(habit);
	}

	/**********************************************************
	Render
	*/

	render(){
		return (
			<div>
			<h2>Your Tracked Habits</h2>
			<ul>
			{Object.keys(this.props.habits).map(habit => (
				<li>
				<fieldset>
				<input onChange={this.handleChangeHabit} value={habit} />
				<button onClick={()=> this.props.removeHabit(habit)}> X </button>
				</fieldset>
				</li>
				))}

				<li>
				<form onSubmit={this.handleNewHabit}>
				<input name="newHabit" ref={this.newHabitRef} />
				<button type="submit"> + </button>
				</form>
				</li>
			</ul>
			</div>
		)
	}
}

export default HabitCreator;