define(["jquery"],function(){

	var QueryManager = function(){
		var me= this;

		me.syncCall= function(urlPath, callBackFunction, data){
			$.ajax({
				url:		urlPath+data,
				type:		'GET',
				dataType:	'json',
				contentType: "application/json",
				success: function(data){
					callBackFunction(data);
				},


				error: function(data){

					console.log("We have an error.");
				}




			});
		};

	};

	return new QueryManager();
});