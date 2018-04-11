import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import App from './App';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route exact path="/habits" component={App} />
			<Redirect from='*' to='/' />
		</Switch>
	</BrowserRouter>
);

export default Router;