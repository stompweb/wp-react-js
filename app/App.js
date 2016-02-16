// TODO: Require via es2015
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;

/* Setup and load all the routes for the application */
var routes = require('./config/routes');

/* Start the rendered and attach it to HTML element */
ReactDOM.render(
	routes,
	document.getElementById('app')
)