angular.module( 'qgovMam', [ 'ngRoute', 'qgov', 'leaflet-directive', 'map', 'hc.marked', 'searchView' ])
// angular.module('qgovMam', [ 'ngRoute', 'qgov', 'searchView' ])

.constant( 'TPL_PATH', '/templates' )
// search results
.constant( 'RESULTS_PER_PAGE', 10 )
.constant( 'PAGES_AVAILABLE', 10 )


// history and URL handling
// https://code.angularjs.org/1.2.26/docs/guide/$location#-location-service-configuration
.config([ '$locationProvider', 
function(  $locationProvider ) {
	$locationProvider.html5Mode( true );
}])


// markdown config
.config([ 'markedProvider',
function(  markedProvider ) {
	// https://github.com/chjj/marked#options-1
	markedProvider.setOptions({
		gfm: true,
		tables: true,
		sanitize: true, // no HTML
	});
}])


.config([ '$routeProvider', 'TPL_PATH',
function(  $routeProvider,   TPL_PATH ) {
	$routeProvider
	.when( '/', {
		controller: 'SearchController',
		controllerAs: 'vm',
		templateUrl : TPL_PATH + '/search.html',
		resolve: {
			pageNumber: [ '$location', function( $location ) {
				return parseInt( $location.search().page, 10 ) || 1;
			}]
		}
	})
	.otherwise({ redirectTo : '/' });
}]);
