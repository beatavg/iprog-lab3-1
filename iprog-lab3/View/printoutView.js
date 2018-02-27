var PrintOutView = function(container, model){

	this.totalCost = container.find("#totalCost");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.goBackEditButton2 = container.find("#goBackEditButton2");

	var menuList = container.find("#menuList");

	var loadMenu = function(){
		menuList.html('');
		var menu = model.getFullMenu();

		$.each(menu, function(i, o){
			var dishName = o.title;
			var dishImage = o.image;
			var dishPreparation = o.instructions;

			menuList.append("<div class='row col-sm-12'><h3>" +dishName+"</h3><div id='printoutImage' class='col-sm-6'><img src=" +dishImage+" align='left' class='img-thumbnail img-margin'></div><div class='col-sm-6'><h3>Preparation</h3><p>"+dishPreparation+"</p></div></div>");
		});

	}

		this.update = function(){
 			loadMenu();
 			this.totalCost.html(model.getTotalMenuPrice());
 			this.numberOfGuests.html(model.getNumberOfGuests());
 		}

	this.goBack = function(){
		container.hide();
		$("#homepageView").hide();
		$("#overViewDishes").hide();
		$("#overView").hide();
		$("#overViewFooter").hide();
		$("#preparation").hide();
		$("#searchCointainer").show();
		$("#searchHeader").show();
		$("#searchresults").show();
		$("#sidebar").show();
 	}

 	loadMenu();
 	model.addObservers(this);

}	

