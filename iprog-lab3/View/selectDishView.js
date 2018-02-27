var SelectDishView = function(container, model){

	var view = this
	this.searchField = container.find("#searchField");
	this.searchButton = container.find("#searchButton");
	this.dropDown = container.find("#dropDown");
	this.searchresults = container.find("#searchresults");
	this.typeOfDish = container.find("#typeOfDish");
	this.allTypes = container.find("#allTypes");
	this.searchForm = container.find(".searchForm");

	var error = function(err){
		console.log(err);
		var errorMsg = "<h1>Error: Check your internet connection</h1>";
		view.searchresults.html(errorMsg);
	}

	this.update = function(arg) {
		this.selectDishType(model.getType());
	}

	this.selectDishType = function(typeOfDish, inputText){

		model.getAllDishes(typeOfDish, inputText, function(data) {
			var result = "";
			if(data.results.length == 0) {
				alert("No dishes were found");
				return;
			} else {
				for (var i=0; i<data.results.length; i++) {
					result += '<div class="col-md-6"><br>';
					result += "<div class='thumbnail'>";
					result += "<img src=https://spoonacular.com/recipeImages/"+data.results[i].image+" class='img-responsive' alt='Responsive image'>";
					result += "<p><a class='nameButton btn btn-default btn-lg btn-block' value='" + data.results[i].id + "' role='button' style='align-center'>" + data.results[i].title + "</a> </p>";
					result += "</div>";
					result += "</div>";
				}
			
		view.searchresults.html(result);
		
		}
		
		view.searchresults.html(result);
		model.setType(typeOfDish);
			
		view.updateFilterLabel();
		}, error); //END OF CALLBACK
	}

	//Update the string in the filter drop down.
	this.updateFilterLabel = function() {
		if(model.getType() == "drink") {
			this.typeOfDish.html("Drink");
		} else if (model.getType() == "beverage"){
			this.typeOfDish.html("Beverage");
		} else if (model.getType() == "soup") {
			this.typeOfDish.html("Soup");
		} else if (model.getType() == "salad") {
			this.typeOfDish.html("Salad");
		} else if (model.getType() == "bread") {
			this.typeOfDish.html("Bread");
		} else if (model.getType() == "breakfast") {
			this.typeOfDish.html("Breakfast");
		} else if (model.getType() == "appetizer") {
			this.typeOfDish.html("Appetizer");
		} else if (model.getType() == "main course") {
			this.typeOfDish.html("Main Course");
		} else if (model.getType() == "side dish") {
			this.typeOfDish.html("Side Dish");
		} else if (model.getType() == "sauce") {
			this.typeOfDish.html("Sauce");
		} else if (model.getType() == "dessert") {
			this.typeOfDish.html("Dessert");
		}
	}

	
	this.update();

	model.addObservers(this);





}

