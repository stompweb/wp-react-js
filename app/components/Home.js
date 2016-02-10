var React = require('react');
import { Link } from 'react-router'

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<div className="container">
					<Link to="/"><h1>WordPress Reader</h1></Link>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = Home;