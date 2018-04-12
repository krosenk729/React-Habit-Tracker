import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import App from './App';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/habits" component={App} />
			<Route path="/login" component={Login} />
			<Redirect from='*' to='/login' />
		</Switch>
	</BrowserRouter>
);

export default Router;