/*
 *
 *	Simple React Router - Client Side Only
 *
 *		<Router root="/folder-path">
 *			<Route path="subdirectory-path" component={<Component To Load />} />
 *		</Router>
 *
 *		Each Route component is passed the following function: changeRoute(path, params);
 *			path = String
 *			params = Array 
 *
 *
 */
	
	var Router = React.createClass({

		childContextTypes: {
			params: React.PropTypes.array,
			root: React.PropTypes.string,
			path: React.PropTypes.string,
			changeRoute: React.PropTypes.func,
			routerHistory: React.PropTypes.func
		},

		getChildContext: function() {
			return { 
				params: this.state.params, 
				root: this.state.root, 
				path: this.state.path, 
				changeRoute: this.changeRoute,
				routerHistory: this.routerHistory
			};
		},

		getInitialState: function() {
			return { 
				path: null, 
				params: null, 
				root: null, 
				props: null 
			};
		},


		arrFind: function(type, source, key, value) {

			if((!key || key.length == 0))
				return null;
			
			var result = source.filter(function(item) { 
				if((type == 'compare' && value.lastIndexOf(item[key], 0) === 0) || 
					(type == 'search' && value.toString() == item[key].toString()))
					return item;
			});
				
			return (result) ? result[0] : null;
		
		},
		
		changeRoute: function changeRoute(path, params, props) {
	
			var url = this.state.root + path;
			url = url.replace(/\/\/+/g, '/'); /* strip possible user error double slashes */
	
			var routeInfo = this.arrFind('search', this.routingMap, 'path', url);
			
			if (params) 
				for (var i = 0; i < params.length; i++)
					if (params[i].length) 
						url += '/' + params[i];
									
			url = (path == '/*') ? this.state.root : url;
			
			this.setState({
				path: routeInfo.path,
				params: (params) ? params : null,
				props: props ? props : null,
				component: routeInfo.component ? routeInfo.component : null
			});
	
			history.pushState({ path: url }, '', url);
			this.saveHistory(path, params);
		},
		

		routerHistory: function(limit) {
			var history = this.historyStack;
			return (limit) ? history.slice(Math.max(history.length - limit, 0)) : history;
		},
				
		saveHistory: function(url, params) {
			this.historyStack.push({path: url, params: params});
		},
		
		handlePopState: function(event) {
			
			if(event && event.state && event.state.path)
				this.setPath(event.state.path);
				
		},
		
		/* crawl all <Route /> nodes to build a complete routing map */
		buildRoutes: function(child, depth, path) {
			
			if (!child || !child.props) 
				return;
		
			/* if there's a rendering component THEN add it to the map */
			if(child.props.component)
				this.routingMap.push({path: this.props.root+((path)?path:'')+child.props.path, component: child.props.component });
			
			React.Children.forEach(child.props.children, function(item) {				
				this.buildRoutes(item, depth + 1, child.props.path);			
			}, this);

		},
		
		setPath: function(url, callback) {
			
			var path = url;
				path = path.replace(/\/\/+/g, '/');  			/* remove double slashes */				
				path = path.replace(this.props.root,'');			/* remove root */
				path = path.replace(/\/+$/, '');					/* remove trailing */
				path = (path.length) ? path.split('/') : null;
		
			var result = {};
			
			if(path) {
				
				var searchPath = (this.props.root + path.join('/'));
				var routeInfo = this.arrFind('search', this.routingMap, 'path', searchPath);
				
				/* check if there's an index */			
				if(!routeInfo)
					routeInfo = this.arrFind('compare', this.routingMap, 'path', searchPath+'/*');
				
				path = searchPath.replace(routeInfo.path, '');
				result.path = routeInfo.path;
				
				result.component = (routeInfo.component) ? routeInfo.component : null ;
			
				path = path.replace(/\/\/+/g, '/');
				path = path.split('/');
				path.shift();
				
				result.params = path;
				
			} else {

				var path = this.props.root;
				path = path.replace(/\/+$/, '');		
						
				var routeInfo = this.arrFind('compare', this.routingMap, 'path', path + '/*');

				result.path = routeInfo.path;
				result.component = (routeInfo.component) ? routeInfo.component : null ;
				result.params = null;
	
			}
			
			this.setState({
				path: (result.path) ? result.path : '/', 
				params: result.params, 
				root: this.props.root,
				component: result.component
			}, (callback) ? callback : null);
			
		},
		
		componentDidMount: function() {

			/* init. history stack w/ first URL visited */
			this.historyStack = Array();
	
			/* init. routing map */
			this.routingMap = Array();
			this.buildRoutes(this, 0, '');
			
			this.setPath(window.location.pathname, function() {
				this.saveHistory(this.state.path, this.state.params);
			});
			
			window.addEventListener('popstate', this.handlePopState);
			window.router = this;
			
		},
		
		render: function() {
			
			if(!this.state.path)
				return false;
			
			window.scrollTo(0, 0);
			return (this.state.component) ? React.cloneElement(this.state.component, this.state.props) : false;
				
		}
		
 	});

	/* just a dummy stateless component */
	var Route = React.createClass({

		render: function() {
			return false;
		},
		
	});
