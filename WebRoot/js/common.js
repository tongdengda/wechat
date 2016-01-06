// Helper function that splits a URL just the way we want it
var processHash = function( url ) {
    var parsed = $.mobile.path.parseUrl( url ),
        queryParameters = {},
        hashQuery = parsed.hash.split( "?" );
    // Create name: value pairs from the query parameters
    $.each( ( hashQuery.length > 1 ? hashQuery[ 1 ] : "" ).split( "&" ), function() {
        var pair = this.split( "=" );
        if ( pair.length > 0 && pair[ 0 ] ) {
            queryParameters[ pair[ 0 ] ] =
                ( pair.length > 1 ? pair[ 1 ] : true );
        }
    });
    return {
        parsed: parsed,
        cleanHash: ( hashQuery.length > 0 ? hashQuery[ 0 ] : "" ),
        queryParameters: queryParameters
    };
};