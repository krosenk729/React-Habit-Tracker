import React from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../utils/base';

class Login extends React.Component{

  componentDidMount(){
  	this.authListener = firebase.auth().onAuthStateChanged( userData => {
  		if(userData && userData.uid){
  			localStorage.setItem('user', userData.uid);
  			this.props.history.push('/habits');
  		} else {
  			localStorage.removeItem('user'); // just in case
  		}
  	});
  }

  componentWillUnmount(){
  	if(this.authListener) this.authListener = undefined;
  }

	/**********************************************************
	Login with firebase
	*/
	login = () =>{
		const provider = new firebase.auth.GoogleAuthProvider();
		firebaseApp.auth().signInWithPopup(provider);
	}

	render(){
		return (
      <div className='display full'>
      <h1>
      Add Goals. Track Them. Create Habits.
      </h1>
			<button className="sk login-btn" onClick={this.login}>Log In</button>
      </div>
		)
	}
}

export default Login;