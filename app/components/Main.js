var React = require('react');
import { Link } from 'react-router'

var PostsList = React.createClass({

	render: function() {
	    var Posts = this.props.data.map(function(post) {
	      	return (
	        	<li className="post" key={post.id}>
	          		<Link to={post.slug}>
	          			<div dangerouslySetInnerHTML={{__html:post.title.rendered}} />
	          		</Link>
	        	</li>
	      	);
	    });
	    
	    return (
	      	<ul className="posts">
	        	{Posts}
	      	</ul>
	    );
  	}

});

module.exports = Main;

var Main = React.createClass({

	setUpData: function() {
		$.ajax({
			url: 'http://www.wired.com/wp-json/wp/v2/posts',
			dataType: 'json',
			success: function(posts) {
				this.setState({data: posts});
			}.bind(this)
		});
	},

	// TODO: Cache the posts
	componentDidMount: function() {
		this.setUpData();
	},

	getInitialState: function() {
		return {
			data: []
		}
	},

	render: function() {

		return (
			<div>
				<h2>List of Posts</h2>
				<PostsList data={this.state.data}/>
			</div>
		)

	}

});


module.exports = Main;