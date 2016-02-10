var React = require('react');
import { Link } from 'react-router'
var WP = require( 'wordpress-rest-api' );
var site = new WP({
    endpoint: 'https://feelingrestful.com/wp-json'
});
var postsRequest = site.posts();

var PostsList = React.createClass({

	render: function() {
	    var Posts = this.props.data.map(function(post) {
	      	return (
	        	<li className="list-group-item" key={post.id}>
	          		<Link to={post.slug}>
	          			<div dangerouslySetInnerHTML={{__html:post.title.rendered}} />
	          		</Link>
	        	</li>
	      	);
	    });
	    
	    return (
	      	<ul className="list-group">
	        	{Posts}
	      	</ul>
	    );
  	}

});

var Main = React.createClass({

	setUpData: function() {
		$.ajax({
			url: 'https://feelingrestful.com/wp-json/wp/v2/posts',
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
				<PostsList data={this.state.data}/>
			</div>
		)

	}

});


module.exports = Main;