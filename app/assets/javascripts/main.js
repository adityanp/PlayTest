define(["/assets/javascripts/QueryManager.js"], function(QueryManager) {
	console.log("Done....");

	var callback= function(data){
		
		console.log("Inside call back "+ data);
	};
	
	
	$("#TestButton").click(function(){
		console.log("Button Clicled....");

		QueryManager.syncCall("/getDetailsForID/",callback,"dummy");
		
		
	});

}

);



