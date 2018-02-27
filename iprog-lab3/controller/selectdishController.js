var SelectDishController = function(view, model, app) {

	view.searchresults.on('click', '.nameButton', function(){
        var id = $(this).attr('value');
        model.setActiveDish(id);
	 	app.showShowDish();
    });

	view.searchForm.submit(function(e){
		e.preventDefault();
	});
 

	view.dropDown.on('click', '#dropDownDrink', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownBeverage', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);

	});

	view.dropDown.on('click', '#dropDownSoup', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);

	});

	view.dropDown.on('click', '#dropDownSalad', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownBread', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownBreakfast', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownAppetizer', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownMainCourse', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownSideDish', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownSauce', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});

	view.dropDown.on('click', '#dropDownDessert', function(){
		var value = this.getAttribute("value");
		var inputText = view.searchField.val();
		console.log(inputText);
		view.selectDishType(value, inputText);
		
	});



	view.searchButton.click(function(){
		var inputText = view.searchField.val();
		var filter = model.getType();
		view.selectDishType(filter, inputText);

	});

}