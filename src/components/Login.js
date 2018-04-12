import React from 'react';
import base from '../utils/base';

class Login extends React.Component{

	/**********************************************************
	Login with firebase
	*/
	login = () =>{
		localStorage.setItem('user', 'user123'/*base.getUser()*/ );
		this.props.history.push('/habits');
	}

	render(){
		return (
			<button onClick={this.login}>Log In</button>
		)
	}
}

export default Login;