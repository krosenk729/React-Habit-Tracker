import React from 'react';
import base from '../utils/base';
import DayLogger from './DayLogger';
import HabitCreator from './HabitCreator';
import HistoryTracker from './HistoryTracker';

class App extends React.Component{
  /**********************************************************
  State Management
  alternative syntax to
  constructor(){ 
    super(); 
    this.state = { ... }
  }
  */
  state = { 
    user: 'user123',
    habits: {},
    history: {}
  };

  /**********************************************************
  Save / sync with firebase
  */
  componentDidMount(){
    const user = 'user123'; //localStorage.getItem(user);
    if(user){
      this.setState({user});

      this.dbRef = base.syncState(`${this.state.user}/habits`, {
        context: this,
        state: 'habits'
      });

      this.dbRef = base.syncState(`${this.state.user}/history`, {
        context: this,
        state: 'history'
      }); 

    } else {
      this.props.history.push('/');
    }

  }

  componentWillUnmount(){
    if(this.dbRef){ base.removeBinding(this.dbRef) }
  }

  /**********************************************************
  Store user in session storage
  */
  // componentDidUpdate(){
  //   localStorage.setItem('user', 'user123'/*base.getUser()*/ );
  // }

  /**********************************************************
  Updating Items:
  copy state
  update copy
  push copy to state
  */
  changeHabit = (changedHabit) => {
    const updatedHabits = {...this.state.habits};
    updatedHabits[changedHabit] = changedHabit;
    this.setState({habits: updatedHabits});
  }

  removeHabit = (oldHabit) => {
    const updatedHabits = {...this.state.habits};
    updatedHabits[oldHabit] = null; // set to null instead of delete due to firebase
    this.setState({habits: updatedHabits});
  }

  logHistory = (date, habit, didDoIt) => {
    const updatedHistory = {...this.state.history};
    updatedHistory[date][habit] = didDoIt || false;
    this.setState({history: updatedHistory});
  }

  render(){
    return (
      <React.Fragment>
        <DayLogger
        habits={this.state.habits}
        history={this.state.history} 
        logHistory={this.state.logHistory} 
        />
        
        <HistoryTracker 
        habits={this.state.habits}
        history={this.state.history}
         />

        <HabitCreator
        habits={this.state.habits}
        changeHabit = {this.changeHabit}
        removeHabit = {this.removeHabit}
        />

      </React.Fragment>
      )
    }
  }

  export default App;