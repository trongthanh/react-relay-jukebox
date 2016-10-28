import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import App from './views/App';
import ListPage from './views/ListPage';
import NauCoin from './views/NauCoin';
import NauStorm from './views/NauStorm';
import { Router, Route, Redirect, browserHistory, applyRouterMiddleware } from 'react-router';
import useRelay from 'react-router-relay';

Relay.injectNetworkLayer(
	new Relay.DefaultNetworkLayer('http://localhost:3000/graphql')
);

const ViewerQueries = { viewer() { return Relay.QL`query { viewer }`; } };

ReactDOM.render(
	<Router
		forceFetch
		environment={Relay.Store}
		render={applyRouterMiddleware(useRelay)}
		history={browserHistory}
	>
		<Redirect from="/" to="/today" />
		<Route path="/" component={App}>
			<Route path="/today" component={ListPage} queries={ViewerQueries} />
			<Route path="/yesterday" component={ListPage} queries={ViewerQueries} />
			<Route path="/last-week" component={ListPage} queries={ViewerQueries} />
			<Route path="/nau-storm" component={NauStorm} />
			<Route path="/nau-coin" component={NauCoin} />
		</Route>
	</Router>,
	document.getElementById('root')
);
