var SidebarView = function (container, model) {

	//var guests = model.getNumberOfGuests();
	
	//numberOfGuests.text(guests)

	this.numberOfGuests = container.find("#numberOfGuests");
	//this.numberOfGuests.html(model.getNumberOfGuests());

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmDinner = container.find("#confirmDinner");
	var dishTable = container.find("#dishTable");
	var totalCost = container.find("#totalCost");
	this.selectedDishes = container.find("#selectedDishes");

	var loadDishes = function() {
		var people = model.getNumberOfGuests();
		dishTable.find('tbody').html('');
		var dishes = model.getFullMenu();
		$.each(dishes, function(i, o){
			var name = o.title;
			var id = o.id;
			var price = o.pricePerServing*people;

			dishTable.find('tbody').prepend("<tr><td><a value="+id+">"+name+"</a></td><td>"+Math.round(price)+"</td><td><span class='glyphicon glyphicon-remove' value="+id+"></span></td></tr>");
		});

	}

	this.update = function(arg){
		totalCost.html(model.getTotalMenuPrice());
		loadDishes();
		this.numberOfGuests.html(model.getNumberOfGuests());

		if(model.getFullMenu().length == 0) {
			this.confirmDinner.addClass("disabled");
		}	else if(model.getNumberOfGuests() <= 0) {
			this.confirmDinner.addClass("disabled")
		} else {
			this.confirmDinner.removeClass("disabled");
		}
	}


	this.numberOfGuests.html(model.getNumberOfGuests());
	loadDishes();
	totalCost.html(model.getTotalMenuPrice());
	model.addObservers(this);



	

}
 
