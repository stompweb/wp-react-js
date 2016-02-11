var React = require('react');
import { Link } from 'react-router'

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<div className="container">
					<Link to="/">
						<img src={'https://stomptheweb.co.uk/wp-content/themes/stomp/images/logo.png'} className="logo" alt="Stomp Reader"/>
					</Link>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = Home;