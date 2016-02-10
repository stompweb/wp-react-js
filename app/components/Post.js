var React = require('react');
import { Link } from 'react-router'

var PostContent = React.createClass({

	render: function() {
	    
	    return (
	    	<div>
	      		<h2><div dangerouslySetInnerHTML={{__html:this.props.title}} /></h2>
				<div dangerouslySetInnerHTML={{__html:this.props.content}} />
			</div>
	    );
  	}

});

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
		if ( this.state.data.length < 1 ) { return <div /> }
		console.log(this.state.data[0].id);
		return (
			<div>
				<PostContent id={this.state.data[0].id} title={this.state.data[0].title.rendered} content={this.state.data[0].content.rendered}/>
				<Link to='/'>Back to list of posts</Link>
			</div>
		);
	}

});

module.exports = Post;