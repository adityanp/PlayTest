requirejs.config({
	async: true,
	parseOnLoad: true,
	packages: [],
	paths: {
		jquery: 'https://code.jquery.com/jquery-3.1.0'
	}

});

requirejs(["assets/javascripts/main"]); 