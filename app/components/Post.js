var React = require('react');
import { Link } from 'react-router'

var Post = React.createClass({

	setUpData: function() {
		$.ajax({
			url: 'http://www.wired.com/wp-json/wp/v2/posts?filter[name]=' + this.props.params.slug,
			dataType: 'json',
			success: function(post) {
				this.setState({data: post});
			}.bind(this)
		});
	},

	componentDidMount: function() {
		this.setUpData();
	},

	getInitialState: function() {
		return {
			data: []
		}
	},

	render: function() {
		console.log(this.state.data);
		return (
			<div>
				<h2>Post Name</h2>
				<Link to='/'>Back to list of posts</Link>
			</div>
		);
	}

});

module.exports = Post;