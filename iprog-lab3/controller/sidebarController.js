var SidebarController = function(view, model, app) {
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1)
		addMenuItemListener();
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1)
		addMenuItemListener();
	});

	view.confirmDinner.click(function(){
		app.showOverView();
	});

	var addMenuItemListener = function() {
    view.selectedDishes.on("click", "a", function(){
      var dishId = $(this).attr("value");
      model.setActiveDish(dishId);
      app.showShowDish();
      addMenuItemListener();
    });
  }

  	var addRemoveListener = function () {
    view.selectedDishes.on("click", ".glyphicon-remove", function(){
      var id = $(this).attr("value");
      model.removeDishFromMenu(id);
      addRemoveListener();
      addMenuItemListener();
    });
  }

  addRemoveListener();
  addMenuItemListener();
}



