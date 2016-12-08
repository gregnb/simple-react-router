/*
 *
 *	Sample Routing Configuration
 *
 */
 
document.addEventListener("DOMContentLoaded", function (e) {

	/* Tie path to Components */
	var routing = (
		<Router root="/simple-react-router/example/">
			<Route path="*" component={<Index />} />
			<Route path="category" component={<Category />} />
			<Route path="product" component={<Product />} />
			<Route path="support">
				<Route path="/faqs" component={<Support page="faqs" />} />
				<Route path="/contact" component={<Support page="contact" />} />
 			</Route>
		</Router>
	);
	
	/* Structure main app */
	var App = ( 
		<div id="viewport">
			{routing}
		</div>
	);

	/* Render to DOM */
	ReactDOM.render(App, document.getElementById('app-root'));
	
});