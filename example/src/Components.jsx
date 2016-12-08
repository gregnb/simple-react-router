/*
 *
 *	Simple Example Components to Demonstrate Routing
 *
 */

	
	var Index = React.createClass({

		getInitialState: function() {	
			return null;		
		},
	
		componentWillMount: function() {
		},
				
		render: function() {
			return (
				<section>
					Welcome to the Index Page!
				</section>
			);
		}
	
	});	


	
	var Category = React.createClass({

		getInitialState: function() {		
			return null;	
		},
	
		componentWillMount: function() {
		},
				
		render: function() {
			return (
				<section>
					Welcome to the Category Page!
				</section>
			);
		}
	
	});	
	

	var Product = React.createClass({

		getInitialState: function() {			
			return null;		
		},
	
		componentWillMount: function() {
		},
				
		render: function() {
			return (
				<section>
					Welcome to the Product Page!
				</section>
			);
		}
	
	});	
		



	var Support = React.createClass({

		getInitialState: function() {	
			return null;		
		},
	
		componentWillMount: function() {
		},

		componentWillUnmount: function() {	
		},

		render: function() {
			
			var RenderContent = false;
			var page = this.props.page
						
			switch(page) {
				
				case 'faqs':
					RenderContent = <SupportFAQs />;
					break;

				case 'contact':
					RenderContent = <SupportContact />;
					break;
					
			}
			
			return RenderContent;		
		},

	});
	
	

	/*
	 *	Support - Contact Section
	 *
	 */
	
	var SupportContact = React.createClass({

		getInitialState: function() {	
			return null;		
		},
	
		componentWillMount: function() {
		},
				
		render: function() {
			return (
				<section>
					Contact us page!...
				</section>
			);
		}
	
	});		
	


	/*
	 *	Support - FAQs Section
	 *
	 */
	
	var SupportFAQs = React.createClass({

		getInitialState: function() {
			return null;			
		},
	
		componentWillMount: function() {
		},
				
		render: function() {
			return (
				<section>
					Support FAQs section!...
				</section>
			);
		}
	
	});		
	
	
	
	
	
