requirejs.config({
	
	jquery: 'javascripts/lib/jquery-1.9.0'
	
});

define(['jquery'], function (jq) {
    return jq.noConflict( true );
});