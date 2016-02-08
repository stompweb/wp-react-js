var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Post = require('../components/Post');
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

module.exports = (

	<Router history={browserHistory}>
		<Route path="/" component={Home}>
			<Route path=":slug" component={Post} />
			<IndexRoute component={Main} />
		</Route>
	</Router>

);