"use strict";

/*
 *
 *	Sample Routing Configuration
 *
 */

document.addEventListener("DOMContentLoaded", function (e) {

	/* Tie path to Components */
	var routing = React.createElement(
		Router,
		{ root: "/simple-react-router/example/" },
		React.createElement(Route, { path: "*", component: React.createElement(Index, null) }),
		React.createElement(Route, { path: "category", component: React.createElement(Category, null) }),
		React.createElement(Route, { path: "product", component: React.createElement(Product, null) }),
		React.createElement(
			Route,
			{ path: "support" },
			React.createElement(Route, { path: "/faqs", component: React.createElement(Support, { page: "faqs" }) }),
			React.createElement(Route, { path: "/contact", component: React.createElement(Support, { page: "contact" }) })
		)
	);

	/* Structure main app */
	var App = React.createElement(
		"div",
		{ id: "viewport" },
		routing
	);

	/* Render to DOM */
	ReactDOM.render(App, document.getElementById('app-root'));
});