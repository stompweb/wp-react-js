var React = require('react');

var Home = React.createClass({

	render: function() {
		return (
			<div>
				<div className="container">
					<h1>WordPress Reader</h1>
					{this.props.children}
				</div>
			</div>
		);
	}

});

module.exports = Home;