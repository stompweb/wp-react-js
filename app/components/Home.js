var React = require('react');
import { Link } from 'react-router'

/* 
** Using the Home component as the parent component. This means when the child components are loaded
** this component doesn't need to be so logo/menus are "static".
*/

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