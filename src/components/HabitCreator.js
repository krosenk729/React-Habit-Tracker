import React from 'react';
import PropTypes from 'prop-types'; 

class HabitCreator extends React.Component{
	static propTypes = {
		habits: PropTypes.object,
		changeHabit: PropTypes.func.isRequired,
		removeHabit: PropTypes.func.isRequired
	};

	/**********************************************************
	Handle Add / Change Habits 
	(bug with react event.Current vs event.target -- clean up the terciary once resolved)
	*/
	newHabitRef = React.createRef();
	handleNewHabit = (event) => {
		event.preventDefault();
		const newHabit = this.newHabitRef.current ? this.newHabitRef.current.value : event.target.newHabit.value;
		const newKey = +new Date();
		this.props.changeHabit(newKey, newHabit);
		event.target.reset();
	}

	handleChangeHabit = (key, event) => {
		const changedHabit = event.currentTarget ? event.currentTarget.value : event.target.value;
		this.props.changeHabit(key, changedHabit);
	}

	/**********************************************************
	Render
	*/

	render(){
		return (
			<div>
			<h2>Your Tracked Habits</h2>
			<ul>
			{Object.keys(this.props.habits).map(index => (
				<li key={index}>
				<fieldset>
				<input onChange={(event) => this.handleChangeHabit(index, event)} value={this.props.habits[index]} />
				<button onClick={()=> this.props.removeHabit(index)}> X </button>
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