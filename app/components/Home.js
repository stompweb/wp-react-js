var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<h1>
					Wired.com Reader
				</h1>
				<div>{this.props.children}</div>
			</div>
		);
	}

});

module.exports = Home;