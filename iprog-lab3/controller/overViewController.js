var OverViewController = function(view, model, app){

	view.goBackEditButton.click(function(){
		app.showSelectDish();
	});

	view.printButton.click(function(){
		app.showPrintOut();
	});
}