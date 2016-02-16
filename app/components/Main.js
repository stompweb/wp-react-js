var React = require('react');
import { Link } from 'react-router'
var WP = require( 'wordpress-rest-api' );
var wp = new WP({ endpoint: 'https://stomptheweb.co.uk/wp-json'});

var PostsList = React.createClass({

	propTypes: {
		posts: React.PropTypes.array.isRequired,
	},

	render: function() {
	    var Posts = this.props.posts.map(function(post) {
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

		/*
		wp.posts().get( function(err, data) {
			console.log(err);
			this.setState({data: data});
		}.bind(this));
		*/

		$.ajax({
			url: 'https://stomptheweb.co.uk/wp-json/wp/v2/posts',
			dataType: 'json',
			success: function(posts) {
				this.setState({data: posts});
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
		// When the view first renders it won't have any information, so return
		if ( this.state.data.length < 1 ) { return <div /> }
		return (
			<div>
				<PostsList posts={this.state.data}/>
			</div>
		)

	}

});


module.exports = Main;