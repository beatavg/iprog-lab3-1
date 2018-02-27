var ShowDishView = function(container, model){
	//var searchresults = container.find("#searchresults");
	//searchresults.html(""); // clear the hard coded stuff
	this.ingredientsBox = container.find("#ingredientsBox");
	this.showDish = container.find("#showDish");
	var ingredientsTable = container.find("#ingredientsTable");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.totalPrice = container.find("#totalPrice");
	this.dishDetails = container.find("#dishDetails");
	this.backButton = container.find("#backButton");
	this.confirmButton = container.find("#confirmButton");
	this.dishPreparation = container.find("#dishInstructions");
	
	//this.dishImage = container.find("#dishImage");
	//this.dishDescription = container.find("#dishDescription");
	//this.backButton = container.find("#backButton");


	this.update = function(arg){
		//var activeDish = model.getDish(id, function(dishes) {
			//this.loadDish(activeDish);
			this.loadDish();
 			//this.notifyObservers();
 		//});
		
	}

	this.loadDish = function(){
		var activeDish = model.getActiveDish(); 
			var htmlString = "";
					
			//htmlString += "<div class='row'>";
			htmlString += "<h3>" + activeDish.title + "</h3>";
			htmlString += "<img src=" +activeDish.image +" class='img-responsive' alt='Responsive image'>";
			htmlString += "<p></p>";
			//htmlString += "</div>";

		
		//htmlString += "</div>";

		this.dishPreparation.html(activeDish.instructions);
		var dishIng = activeDish.extendedIngredients;

		this.loadIngredients(dishIng);
		

		this.dishDetails.html(htmlString);
		
 		
 		
		
	}

	this.loadIngredients = function(id){
		this.numberOfGuests.html(model.getNumberOfGuests());

		var activeDish = model.getActiveDish(id);
		var people = model.getNumberOfGuests();
		ingredients = activeDish.extendedIngredients;
		var htmlString = "";
		var table = container.find("#tbody");

		// htmlString += "<tbody id='tbody'>";
		for(var i=0; i<ingredients.length; i++) {
		htmlString += "<tr><td>"+ingredients[i].amount*people+" "+ingredients[i].unit+"</td><td>"+ingredients[i].name+"</td></tr>";
		this.totalPrice.html(Math.round(activeDish.pricePerServing*people));
	}
		// htmlString += "</tbody>";
		table.html(htmlString);
	}



	model.addObservers(this);

}
