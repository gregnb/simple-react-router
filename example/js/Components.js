'use strict';

/*
 *
 *	Simple Example Components to Demonstrate Routing
 *
 */

var Index = React.createClass({
	displayName: 'Index',


	getInitialState: function getInitialState() {
		return null;
	},

	componentWillMount: function componentWillMount() {},

	render: function render() {
		return React.createElement(
			'section',
			null,
			'Welcome to the Index Page!'
		);
	}

});

var Category = React.createClass({
	displayName: 'Category',


	getInitialState: function getInitialState() {
		return null;
	},

	componentWillMount: function componentWillMount() {},

	render: function render() {
		return React.createElement(
			'section',
			null,
			'Welcome to the Category Page!'
		);
	}

});

var Product = React.createClass({
	displayName: 'Product',


	getInitialState: function getInitialState() {
		return null;
	},

	componentWillMount: function componentWillMount() {},

	render: function render() {
		return React.createElement(
			'section',
			null,
			'Welcome to the Product Page!'
		);
	}

});

var Support = React.createClass({
	displayName: 'Support',


	getInitialState: function getInitialState() {
		return null;
	},

	componentWillMount: function componentWillMount() {},

	componentWillUnmount: function componentWillUnmount() {},

	render: function render() {

		var RenderContent = false;
		var page = this.props.page;

		switch (page) {

			case 'faqs':
				RenderContent = React.createElement(SupportFAQs, null);
				break;

			case 'contact':
				RenderContent = React.createElement(SupportContact, null);
				break;

		}

		return RenderContent;
	}

});

/*
 *	Support - Contact Section
 *
 */

var SupportContact = React.createClass({
	displayName: 'SupportContact',


	getInitialState: function getInitialState() {
		return null;
	},

	componentWillMount: function componentWillMount() {},

	render: function render() {
		return React.createElement(
			'section',
			null,
			'Contact us page!...'
		);
	}

});

/*
 *	Support - FAQs Section
 *
 */

var SupportFAQs = React.createClass({
	displayName: 'SupportFAQs',


	getInitialState: function getInitialState() {
		return null;
	},

	componentWillMount: function componentWillMount() {},

	render: function render() {
		return React.createElement(
			'section',
			null,
			'Support FAQs section!...'
		);
	}

});