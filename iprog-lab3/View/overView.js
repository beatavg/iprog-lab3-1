var OverView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff
	var totalCost = container.find("#totalCost");
	var numberOfGuests = container.find("#numberOfGuests");
	this.goBackEditButton = container.find("#goBackEditButton");
	this.printButton = container.find("#printButton");

	this.update  = function(){
		var dishes = model.getFullMenu();
		var htmlString = "";
		var people = model.getNumberOfGuests();


		totalCost.html(model.getTotalMenuPrice());
		numberOfGuests.html(model.getNumberOfGuests());


		htmlString += "<div class='row col-sm-12' id='overViewDishes'>";
		for(var i=0; i<dishes.length; i++) {
			htmlString += "<div class='row col-sm-4'>";
			htmlString += "<div class='thumbnail'>";
			htmlString += "<img src="+ dishes[i].image+" class='img-responsive' alt='Responsive image'>"
			htmlString += "<p><a class='btn btn-default btn-lg btn-block' role='button' style='align-center'>" + dishes[i].title + "</a></p>";
			htmlString += "<h5 class='totalCost' style='color:#990000; align-right'>SEK " + Math.round(dishes[i].pricePerServing*people) +"</h5>";
			htmlString += "</div>";
			htmlString += "</div>";

		}
			htmlString += "</div>";
			container.find("#overViewDishes").html(htmlString);

	}
	

	model.addObservers(this);

}

