// TODO: Require via es2015
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
	routes,
	document.getElementById('app')
)