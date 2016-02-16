var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Post = require('../components/Post');
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

module.exports = (

	/* 
	** Use {browserHistory} to prevent hashes in the URL 
	** Use the Home component as the parent component
	** Match routes such as :slug otherwise use the Main component
	*/
	<Router history={browserHistory}>
		<Route path="/" component={Home}>
			<Route path=":slug" component={Post} />
			<IndexRoute component={Main} />
		</Route>
	</Router>

);