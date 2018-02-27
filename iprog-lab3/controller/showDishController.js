var ShowDishController = function(showDishView, sidebarView, model, app) {
	showDishView.backButton.click(function() {
		app.showSelectDish();
	});

	showDishView.confirmButton.click(function(){
		var activeDish = model.getActiveDish();
		model.addDishToMenu(activeDish.id);
		var dish = model.getSelectedDish(activeDish.type);
		if(dish != "-1") {
			addMenuItemListner();
			app.showSelectDish();
			
		}
	});

	var addMenuItemListner = function(){
		sidebarView.selectedDishes.find("a").click(function(){
			var dishId = this.getAttribute("value");
			model.setActiveDish(dishId);
			app.showShowDish();
			addMenuItemListner();
		});
	}



}