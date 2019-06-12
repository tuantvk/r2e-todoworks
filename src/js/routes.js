
import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

const Layout = ({ children }) => <div>{children}</div>

const Main = withRouter(props => <Layout {...props} />);

const Home = () => <div>Home</div>

export default () => {
	return (
		<Main>
			<Switch>
				<Route exact path="/home" component={Home} />
			</Switch>
		</Main>
	);
};
