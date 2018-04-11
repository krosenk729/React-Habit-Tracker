import React from 'react';

class HabitCreator extends React.Component{
	newHabit = React.createRef();

	/**********************************************************
	Add a Habit
	*/
	handleNewHabit(){
		this.props.changedHabit();
		this.refs.newHabit = '';
	}

	render(){
		return (
			<div>
			<h2>Your Tracked Habits</h2>
			<ul>
			{Object.keys(this.props.habits).map(habit => (
				<li>
				<fieldset>
				<input key={habit} onChange={()=> this.props.changedHabit} value={habit} />
				<button onClick={()=> this.props.removeHabit()}> X </button>
				</fieldset>
				</li>
				))}

				<li>
				<fieldset>
				<input onChange={()=> this.props.changedHabit()} />
				<button onClick={()=> this.props.removeHabit()}> X </button>
				</fieldset>
				</li>
			</ul>
			</div>
		)
	}
}

export default HabitCreator;