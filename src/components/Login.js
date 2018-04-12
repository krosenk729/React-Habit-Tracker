import React from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../utils/base';

class Login extends React.Component{

  componentDidMount(){
  	this.authListener = firebase.auth().onAuthStateChanged( userData => {
  		console.log('componentDidMount user data', userData);
  		if(userData && userData.uid){
  			localStorage.setItem('user', userData.uid);
  			this.props.history.push('/habits');
  		} else {
  			console.log('else ran');
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
			<button onClick={this.login}>Log In</button>
		)
	}
}

export default Login;