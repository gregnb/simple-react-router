# simple-react-router
This is a simple client side ONLY React Router


Installation
------------
Just download SimpleRouter.min.js and include it with a script tag like this:
```html
<script type="text/javascript" language="javascript" src="SimpleRouter.min.js" charset="utf-8"></script>
```

Router Configuration
--------------------
The routing configuration is very straight forward. You simply define the paths and tie components to them! Path value of * is used for Index. 

Here is the example config that's found in the sample code inside of example/

```html

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

```


The Routing configuration above will render the following:

URL                     | Component
------------------------|-----------
*/*                   	| **Index**
*/category*             | **Category**
*/product*          	| **Product**
*/support/faqs*  	| **Support -> FAQs**
*/support/contact*   	| **Support -> Contact**
