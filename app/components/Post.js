var React = require('react');
import { Link } from 'react-router'

var PostContent = React.createClass({

	render: function() {
	    
	    return (
	    	<div className="col-md-8">
	    		<div className="post">
	      			<h2><div dangerouslySetInnerHTML={{__html:this.props.title}} /></h2>
					<div dangerouslySetInnerHTML={{__html:this.props.content}} />
				</div>
			</div>
	    );
  	}

});

var AuthorBio = React.createClass({

	render: function() {
	    
	    return (
	    	<div className="col-md-offset-1 col-md-3">
	      		<div className="card">
	      			<div className="card-block">
						<h4>Steven Jones</h4>
	      			</div>
	      		</div>
			</div>
	    );
  	}

});

var Post = React.createClass({

	setUpData: function() {
		$.ajax({
			url: 'https://feelingrestful.com/wp-json/wp/v2/posts?filter[name]=' + this.props.params.slug,
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
		return (
			<div>
				<div className="row">
					<PostContent id={this.state.data[0].id} title={this.state.data[0].title.rendered} content={this.state.data[0].content.rendered}/>
					<AuthorBio />
				</div>
				<div className="back">
					<Link to='/'>Back to list of posts</Link>
				</div>
			</div>
		);
	}

});

module.exports = Post;