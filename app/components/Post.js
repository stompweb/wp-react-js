import React from 'react';
import { Link } from 'react-router';
import { unescape } from 'underscore'
var DocumentTitle = require('react-document-title');

var PostContent = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		content: React.PropTypes.string.isRequired,
	},

	render: function() {
	    
	    return (
	    	<div className="col-md-8">
	    		<div className="post">
	      			<h1>{this.props.title}</h1>
					<div dangerouslySetInnerHTML={{__html:this.props.content}} />
				</div>
			</div>
	    );
  	}

});

var PostSidebar = React.createClass({

	propTypes: {
		author: React.PropTypes.number.isRequired,
		date: React.PropTypes.string.isRequired,
		categories: React.PropTypes.array.isRequired,
	},

	render: function() {

		var date = new Date(this.props.date);
		var postDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
		var categories = this.props.categories.join(', ');
	    
	    return (
	    	<div className="col-md-offset-1 col-md-3">
	      		<div className="card">
	      			<div className="card-block">
						<h4>{this.props.author}</h4>
						<h4>{postDate}</h4>
						<h4>{categories}</h4>
	      			</div>
	      		</div>
			</div>
	    );
  	}

});

var Post = React.createClass({

	setUpData: function() {
		$.ajax({
			url: 'https://stomptheweb.co.uk/wp-json/wp/v2/posts?filter[name]=' + this.props.params.slug,
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
		// When the view first renders it won't have any information, so return
		if ( this.state.data.length < 1 ) { return <div /> }
		var post = this.state.data[0];
		console.log(post.categories);
		return (
			<DocumentTitle title={post.title.rendered}>
				<div>
					<div className="row">
						<PostContent
							id={post.id} 
							title={post.title.rendered} 
							content={post.content.rendered} />

						<PostSidebar 
							date={post.date} 
							author={post.author}
							categories={post.categories} />
					</div>
					<div className="back">
						<Link to='/'>
							{_.unescape('&lt; ')}
							Back to list of posts
						</Link>
					</div>
				</div>
			</DocumentTitle>
		);
	}

});

module.exports = Post;