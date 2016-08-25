define(["/assets/javascripts/QueryManager.js","ko"], function(QueryManager,ko) {
	console.log("Done....");

	var temp = ko.observable("");
	
	var callback= function(data){
		
		console.log("Inside call back "+ data);
	};
	
	
	$("#TestButton").click(function(){
		console.log("Button Clicled....");

		QueryManager.syncCall("/getDetailsForID/",callback,"dummy");
		
		
	});

}

);



